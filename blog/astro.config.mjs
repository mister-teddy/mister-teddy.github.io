import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mister-teddy.github.io",
  base: "/blog",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
});

