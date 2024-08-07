// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  ssr: false,

  routeRules: {
    '/scrollingtext': { proxy: 'https://patorjk.com/misc/scrollingtext/timewaster.php' },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      'Roboto Mono': true
    }
  },

  modules: ["@nuxtjs/google-fonts"]
})