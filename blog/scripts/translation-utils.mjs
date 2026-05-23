import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

export const blogRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
export const postsDir = path.join(blogRoot, "src", "content", "blog");
export const translationsDir = path.join(
  blogRoot,
  "src",
  "content",
  "translations",
);
export const supportedLanguages = ["en", "vi"];

export function targetLanguage(lang) {
  return lang === "en" ? "vi" : "en";
}

export async function readMdxFiles(dir) {
  const files = [];

  async function visit(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await visit(fullPath);
      } else if (/\.(md|mdx)$/.test(entry.name)) {
        files.push(fullPath);
      }
    }
  }

  await visit(dir);
  return files.sort();
}

export async function readEntry(filePath) {
  const raw = await readFile(filePath, "utf8");
  const parsed = matter(raw);
  return {
    filePath,
    raw,
    content: parsed.content.trim(),
    data: parsed.data,
  };
}

export function normalizeDate(value) {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

export function sourceHash(entry) {
  const data = entry.data;
  const payload = {
    title: data.title,
    description: data.description,
    pubDate: normalizeDate(data.pubDate),
    updatedDate: normalizeDate(data.updatedDate),
    lang: data.lang,
    slug: data.slug,
    tags: Array.isArray(data.tags) ? data.tags : [],
  };

  return createHash("sha256")
    .update(`${JSON.stringify(payload)}\n---\n${entry.content}\n`)
    .digest("hex");
}

export async function loadPosts() {
  const files = await readMdxFiles(postsDir);
  const entries = await Promise.all(files.map(readEntry));
  return entries.filter((entry) => !entry.data.draft);
}

export async function loadTranslations() {
  const files = await readMdxFiles(translationsDir);
  const entries = await Promise.all(files.map(readEntry));
  return entries.filter((entry) => !entry.data.draft);
}

export async function writeEntry(entry, data) {
  const normalizedData = { ...data };
  for (const key of ["pubDate", "updatedDate"]) {
    if (normalizedData[key]) {
      normalizedData[key] = normalizeDate(normalizedData[key]);
    }
  }

  const next = matter.stringify(`${entry.content}\n`, normalizedData);
  await writeFile(entry.filePath, next, "utf8");
}

