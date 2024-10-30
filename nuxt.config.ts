// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "mateja.dev",
    },
  },
  devServer: {
    port: 8000,
    host: "0.0.0.0",
  },
  ssr: true,
  pages: true,
  modules: [
    "@nuxt/ui",
    "nuxt-locomotive-scroll",
    "@nuxt/image",
    "@hypernym/nuxt-anime",
    "nuxt-umami",
  ],
  css: ["assets/css/tailwind.css"],
  anime: {
    provide: true,
    composables: true,
    autoImport: true,
  },
  umami: {
    id: "23977b66-9771-42ed-8c3e-dd0bf7f2ded8",
    host: "https://umami.mejtscheapassdomain.site/",
    autoTrack: true,
  },
});
