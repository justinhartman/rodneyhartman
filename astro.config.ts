import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import astroPure from "astro-pure";
import site from "./src/site.config.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [astroPure(site)],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
