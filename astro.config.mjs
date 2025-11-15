// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
    site: "http://localhost:4321",
    compressHTML: !isDev,
    i18n: {
        locales: ["tr", "en"],
        defaultLocale: "tr",
        routing: {
            redirectToDefaultLocale: false,
            prefixDefaultLocale: true,
        },
    },
    integrations: [sitemap()],

    vite: {
        plugins: [tailwindcss()],
    },
});
