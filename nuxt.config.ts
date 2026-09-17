export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/seo"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://konton.pro",
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://konton.pro",
    name: "Konton PRO",
    description: "A Konton PRO transforma problemas reais em produtos digitais simples, seguros e úteis.",
    defaultLocale: "pt-BR",
    indexable: process.env.NUXT_PUBLIC_SITE_INDEXABLE !== "false",
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      meta: [
        { name: "theme-color", content: "#171513" },
        { name: "color-scheme", content: "light" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
