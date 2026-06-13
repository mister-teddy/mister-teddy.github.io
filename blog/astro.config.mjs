import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkHeadingId } from "remark-custom-heading-id";

export default defineConfig({
  site: "https://mister-teddy.github.io",
  base: "/blog",
  trailingSlash: "always",
  // Enables `## Heading {#custom-id}` syntax. The custom id flows into the
  // generated heading id AND the `headings` array used by the ToC.
  markdown: { remarkPlugins: [remarkHeadingId] },
  integrations: [mdx(), sitemap()],
});

