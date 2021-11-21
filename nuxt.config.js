export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    titleTemplate: "%s - Josie's Recipes",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name	', content: "Josie's Recipes" },
      { property: 'og:locale	', content: 'fr-FR' },
      { property: 'twitter:card	', content: 'summary_large_image' },
      {
        name: 'p:domain_verify',
        content: 'f54ff9ae5eafdb341025ce124a4198c7'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [
      {
        src: 'https://kit.fontawesome.com/0bafaa22a3.js',
        crossorigin: 'anonymous'
      },
      // {
      //   src:
      //     'https://cmp.osano.com/Azyw8hSD6Ryyh6hb/ab0011f7-c456-425f-9db9-75f49f676558/osano.js'
      // },
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-4925011117186251',
        async: true
      },
      {
        src: 'https://assets.pinterest.com/js/pinit.js',
        defer: true,
        async: true
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/style.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'bootstrap-vue/nuxt',
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap'
  ],
  gtm: {
    autoInit: false,
    id: 'GTM-MX36K52'
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  sitemap: {
    hostname: 'https://josies-recipes.netlify.app/',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const articles = await $content('articles').only(['path']).fetch()
      return articles.map((p) => p.path)
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    babel: {
      compact: true
    }
  },
  googleFonts: {
    preconnect: true,
    prefetch: true,
    preload: true,
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      'Crimson+Text': true,
      Engagement: true
    }
  }
}
