import path from "node:path";
import {
  loadPosts,
  loadTranslations,
  sourceHash,
  supportedLanguages,
  targetLanguage,
} from "./translation-utils.mjs";

const posts = await loadPosts();
const translations = await loadTranslations();
const errors = [];

for (const post of posts) {
  const postName = path.relative(process.cwd(), post.filePath);

  if (!supportedLanguages.includes(post.data.lang)) {
    errors.push(`${postName}: unsupported lang "${post.data.lang}"`);
    continue;
  }

  if (!post.data.slug) {
    errors.push(`${postName}: missing slug`);
    continue;
  }

  const expectedLang = targetLanguage(post.data.lang);
  const matches = translations.filter(
    (translation) => translation.data.translationOf === post.data.slug,
  );

  if (matches.length === 0) {
    errors.push(
      `${postName}: missing ${expectedLang} translation for "${post.data.slug}"`,
    );
    continue;
  }

  if (matches.length > 1) {
    errors.push(
      `${postName}: found ${matches.length} translations for "${post.data.slug}"`,
    );
  }

  const translation = matches.find((item) => item.data.lang === expectedLang);
  if (!translation) {
    errors.push(
      `${postName}: expected ${expectedLang} translation for "${post.data.slug}"`,
    );
    continue;
  }

  const expectedHash = sourceHash(post);
  if (translation.data.sourceHash !== expectedHash) {
    const translationName = path.relative(process.cwd(), translation.filePath);
    errors.push(
      `${translationName}: stale sourceHash for "${post.data.slug}". Run pnpm --dir blog translations:stamp after updating the translation.`,
    );
  }
}

if (errors.length > 0) {
  console.error("Translation check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Translation check passed for ${posts.length} post(s).`);

