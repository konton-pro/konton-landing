export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/seo", "@nuxtjs/i18n"],
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
      routes: ["/", "/en"],
    },
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://konton.pro",
    defaultLocale: "pt-BR",
    strategy: "prefix_except_default",
    locales: [
      { code: "pt-BR", language: "pt-BR", name: "Português", file: "pt-BR.json" },
      { code: "en", language: "en-US", name: "English", file: "en.json" },
    ],
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "pt-BR",
    },
    vueI18n: "./i18n.config.ts",
  },
  app: {
    head: {
      meta: [
        { name: "theme-color", content: "#171513" },
        { name: "color-scheme", content: "light" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
