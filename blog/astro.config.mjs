import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkHeadingId } from "remark-custom-heading-id";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://mister-teddy.github.io",
  base: "/blog",
  trailingSlash: "always",
  markdown: {
    // `## Heading {#custom-id}` syntax → flows into heading id + ToC slug.
    remarkPlugins: [remarkHeadingId],
    // Open external (http/https) links in post content in a new tab, safely.
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
    ],
  },
  integrations: [mdx(), sitemap()],
});

