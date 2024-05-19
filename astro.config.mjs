import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://salmaj.me/",
  integrations: [tailwind(), sitemap(), mdx(), prefetch()],
  adapter: vercel({
    analytics: true,
  }),
});
