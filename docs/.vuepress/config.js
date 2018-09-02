module.exports = {
  title: 'Nuxt.js ビギナーズガイド',
  themeConfig: {
    sidebar: {
      '/examples/': [
        '',
        'my-first-nuxt-app.md',
        'nuxt-blog-service.md',
        'nuxt-testing-environment.md',
        'nuxt-auto-testing-with-circleci.md',
        'modules-proxy-example.md',
        'modules-pwa-example.md',
        'nuxt-redirect-query-module.md'
      ]
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'サンプル一覧', link: '/examples/' },
      { text: 'GitHub', link: 'https://github.com/elevenback/nuxt-beginners-guide-examples' }
    ]
  }
}
