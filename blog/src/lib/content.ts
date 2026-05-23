import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type Translation = CollectionEntry<"translations">;

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getPublishedTranslations() {
  return getCollection("translations", ({ data }) => !data.draft);
}

export async function getTranslationForPost(post: BlogPost) {
  const translations = await getPublishedTranslations();
  return translations.find(
    (translation) => translation.data.translationOf === post.data.slug,
  );
}

