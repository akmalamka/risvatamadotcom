export default defineNuxtConfig({
  compatibilityDate: '2025-11-25',

  components: {
    dirs: [
      '~/components',
      '~/block/components',
    ],
  },

  routeRules: {
    '/': { redirect: '/en' },
  },

  css: ['~/designs/styles/index.css'],

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/sanity',
    '@nuxtjs/seo',
  ],

  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: '%s',
    },
  },

  seo: {
    automaticTwitterTags: false,
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en', file: 'en.json' },
      { code: 'id', language: 'id', file: 'id.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    langDir: 'locales',
    detectBrowserLanguage: false,
  },

  site: {
    url: process.env.NUXT_SITE_URL || 'http://localhost:3000',
    name: 'Risvatama Laras',
    description: 'Risvatama Laras',
    defaultLocale: 'en',
  },

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET || 'production',
    apiVersion: '2024-03-15',
    useCdn: process.env.NODE_ENV === 'production',
  },

  vite: {
    ssr: {
      external: ['@sanity/client', 'get-it'],
    },
  },

  nitro: {
    externals: {
      external: ['@sanity/client', 'get-it'],
    },
  },

  typescript: {
    strict: true,
  },
})
