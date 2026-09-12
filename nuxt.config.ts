export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      meta: [
        { name: "theme-color", content: "#f7f5ef" },
        { name: "color-scheme", content: "light" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
