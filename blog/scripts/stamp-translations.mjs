import path from "node:path";
import {
  loadPosts,
  loadTranslations,
  sourceHash,
  targetLanguages,
  writeEntry,
} from "./translation-utils.mjs";

const posts = await loadPosts();
const translations = await loadTranslations();
let updated = 0;
let missing = 0;

for (const post of posts) {
  const expectedLanguages = targetLanguages(post.data.lang);

  for (const expectedLang of expectedLanguages) {
    const translation = translations.find(
      (item) =>
        item.data.translationOf === post.data.slug &&
        item.data.lang === expectedLang,
    );

    if (!translation) {
      console.warn(
        `Missing ${expectedLang} translation for ${path.relative(
          process.cwd(),
          post.filePath,
        )}`,
      );
      missing += 1;
      continue;
    }

    const nextHash = sourceHash(post);
    if (translation.data.sourceHash !== nextHash) {
      await writeEntry(translation, {
        ...translation.data,
        sourceHash: nextHash,
      });
      updated += 1;
    }
  }
}

console.log(`Updated ${updated} translation hash(es).`);
if (missing > 0) {
  process.exit(1);
}
