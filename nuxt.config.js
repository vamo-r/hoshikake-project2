import Sass from 'sass'
import Fiber from 'fibers'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/hoshikake-project2/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | 第2回 星駆web制作企画',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '技術向上及び交流を目的としたweb制作企画の1つのサイトです。本サイトは架空のものですのでご承知下さい。' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:site_name', property: 'og:site_name', content: '星駆花火大会 | 第2回 星駆web制作企画' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://vamo-r.github.io/hoshikake-project2/' },
      { hid: 'og:title', property: 'og:title', content: '星駆花火大会' },
      { hid: 'og:description', property: 'og:description', content: '技術向上及び交流を目的としたweb制作企画の1つのサイトです。本サイトは架空のものですのでご承知下さい。' },
      { hid: 'og:image', property: 'og:image', content: '/icon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicons/favicon.ico' },
      { rel: 'apple-touch-icon', href: 'favicons/apple-touch-icon.png', sizes: '180x180' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/sass/style.scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scrollto'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: '星駆花火大会 | 第2回 星駆web制作企画',
      short_name: '星駆花火大会',
      description: '技術向上及び交流を目的としたサイトです。',
      lang: 'ja'
    }
  },

  styleResources: {
    scss: ['~/assets/sass/_variable.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets({ isServer }, [preset, options]) {
        options.loose = true
      }
    },
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  }
}
