import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: "static",
  image: {
    domains: [
      "dev-to-uploads.s3.amazonaws.com",
      "https://dev-to-uploads.s3.amazonaws.com/",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/psxvdn3z7a17rof1xn0j.png",
      "og.anit.dev",
    ],
  },
  site: "https://salmaj.me/",
  integrations: [tailwind(), sitemap(), mdx(), prefetch()],
  adapter: vercel({
    analytics: true,
  }),
});
