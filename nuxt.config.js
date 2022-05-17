const envConfig = require('dotenv').config({
  path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`,
})

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loading: false,

  env: {
    ...process.env,
    ...envConfig.parsed,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-base-project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    middleware: ['i18n'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/global.less'],

  styleResources: {
    less: './assets/css/vars/*.less',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/i18n.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [['cookie-universal-nuxt', { parseJSON: false }]],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
}
