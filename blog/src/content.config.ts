import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const language = z.enum(["en", "vi", "de"]);
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: language,
    slug,
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const translations = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/translations",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    translationOf: slug,
    lang: language,
    sourceHash: z.string().min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, translations };
