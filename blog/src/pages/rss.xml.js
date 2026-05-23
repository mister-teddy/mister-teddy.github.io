import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../lib/site";

export async function GET(context) {
  const posts = await getPublishedPosts();
  const site = new URL(import.meta.env.BASE_URL, context.site);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${post.data.slug}/`,
    })),
  });
}

