module.exports = {
  title: 'Nuxt.js ビギナーズガイド',
  themeConfig: {
    sidebar: {
      '/about/': [''],
      '/eratta/': [''],
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
      { text: '本書について', link: '/about/' },
      { text: 'サンプル一覧', link: '/examples/' },
      { text: '正誤表', link: '/eratta/' },
      { text: 'Twitter', link: 'https://twitter.com/potato4d' }
    ],
    repo: 'potato4d/nuxt-beginners-guide',
    repoLabel: 'GitHub',
    docsRepo: 'potato4d/nuxt-beginners-guide',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '編集を提案する'
  }
}
