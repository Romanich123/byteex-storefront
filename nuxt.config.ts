export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  ignore: ["sanity/**"],
  vite: { server: { watch: { ignored: ["**/sanity/**"] } } },
  css: [
    "@fontsource/outfit/400.css",
    "@fontsource/outfit/500.css",
    "@fontsource/outfit/600.css",
    "~/assets/scss/main.scss",
  ],
  runtimeConfig: {
    sanityProjectId: "",
    sanityDataset: "production",
    sanityReadToken: "",
  },
  app: {
    head: {
      title: "Byteex — Comfort, naturally.",
      htmlAttrs: { lang: "en" },
      meta: [
        {
          name: "description",
          content:
            "Beautiful, consciously made loungewear for day or night. Find your everyday comfort with Byteex.",
        },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
