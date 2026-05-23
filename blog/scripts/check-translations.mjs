import path from "node:path";
import {
  loadPosts,
  loadTranslations,
  sourceHash,
  supportedLanguages,
  targetLanguages,
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

  const expectedLanguages = targetLanguages(post.data.lang);
  const matches = translations.filter(
    (translation) => translation.data.translationOf === post.data.slug,
  );

  if (matches.length === 0) {
    errors.push(
      `${postName}: missing ${expectedLanguages.join(", ")} translations for "${post.data.slug}"`,
    );
    continue;
  }

  if (matches.length > expectedLanguages.length) {
    errors.push(
      `${postName}: found ${matches.length} translations for "${post.data.slug}"`,
    );
  }

  const translationsByLanguage = new Map();
  for (const translation of matches) {
    if (!supportedLanguages.includes(translation.data.lang)) {
      const translationName = path.relative(process.cwd(), translation.filePath);
      errors.push(`${translationName}: unsupported lang "${translation.data.lang}"`);
      continue;
    }

    const grouped = translationsByLanguage.get(translation.data.lang) ?? [];
    grouped.push(translation);
    translationsByLanguage.set(translation.data.lang, grouped);
  }

  const expectedHash = sourceHash(post);

  for (const expectedLang of expectedLanguages) {
    const languageMatches = translationsByLanguage.get(expectedLang) ?? [];
    if (languageMatches.length === 0) {
      errors.push(
        `${postName}: expected ${expectedLang} translation for "${post.data.slug}"`,
      );
      continue;
    }

    if (languageMatches.length > 1) {
      errors.push(
        `${postName}: found ${languageMatches.length} ${expectedLang} translations for "${post.data.slug}"`,
      );
    }

    const [translation] = languageMatches;
    if (translation.data.sourceHash !== expectedHash) {
      const translationName = path.relative(process.cwd(), translation.filePath);
      errors.push(
        `${translationName}: stale sourceHash for "${post.data.slug}". Run pnpm --dir blog translations:stamp after updating the translation.`,
      );
    }
  }

  for (const translation of matches) {
    if (translation.data.lang === post.data.lang) {
      const translationName = path.relative(process.cwd(), translation.filePath);
      errors.push(
        `${translationName}: translation language must differ from source lang "${post.data.lang}"`,
      );
    }
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
