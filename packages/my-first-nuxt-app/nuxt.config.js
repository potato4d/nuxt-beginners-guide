module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-first-nuxt-app',
    titleTemplate: '%s | Nuxt.js tag items viewer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {

  },
  plugins: [
    '~/plugins/axios.js'
  ],
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  }
}

