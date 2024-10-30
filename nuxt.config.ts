// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "mateja.dev",
      script: [
        {
          defer: true,
          src: "http://192.168.1.69:43300/script.js",
          "data-website-id": "b5ba1100-3cb3-403c-b894-2b9a7a6d38ad",
        },
      ],
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
  ],
  css: ["assets/css/tailwind.css"],
  anime: {
    provide: true,
    composables: true,
    autoImport: true,
  },
});
