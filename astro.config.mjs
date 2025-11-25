// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  site: "https://limo.com",
  compressHTML: !isDev,

  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    routing: {
      redirectToDefaultLocale: false,
      prefixDefaultLocale: true,
    },
  },

  integrations: [sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
