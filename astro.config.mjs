// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://on-trackauto.com.au", // Replace with your actual site URL
  integrations: [sitemap()],
});
