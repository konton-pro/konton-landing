const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || "https://konton.pro";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/seo", "@nuxtjs/i18n"],
  runtimeConfig: {
    public: {
      siteUrl: siteUrl,
    },
  },
  site: {
    url: siteUrl,
    name: "Konton PRO",
    description: "A Konton PRO transforma problemas reais em produtos digitais simples, seguros e úteis.",
    defaultLocale: "pt-BR",
    indexable: process.env.NUXT_PUBLIC_SITE_INDEXABLE !== "false",
  },
  nitro: {
    prerender: {
      // "/" is SSR'd (not prerendered): Nitro serves public assets before server middleware,
      // so a prerendered "/" would bypass server/middleware/locale-redirect.ts.
      routes: ["/en"],
    },
  },
  i18n: {
    baseUrl: siteUrl,
    defaultLocale: "pt-BR",
    strategy: "prefix_except_default",
    locales: [
      { code: "pt-BR", language: "pt-BR", name: "Português", file: "pt-BR.json" },
      { code: "en", language: "en-US", name: "English", file: "en.json" },
    ],
    langDir: "locales",
    // Detection is owned by server/middleware/locale-redirect.ts (bot-aware, first visit only, cookie-aware).
    // i18n's own detection redirects bots and fights the middleware, so it stays off; the switcher must set
    // the `i18n_redirected` cookie itself.
    detectBrowserLanguage: false,
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
