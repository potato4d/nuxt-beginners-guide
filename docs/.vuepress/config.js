module.exports = {
  title: 'Nuxt.js ビギナーズガイド',
  description: '「Nuxt.js ビギナーズガイド（C&R研究所出版）」　のサポートページです',
  ga: 'UA-63818166-26',
  themeConfig: {
    algolia: {
      appId: 'SDCNXEIPU4',
      apiKey: '511bd4ab1983e9c564b33d61f1b32d14',
      indexName: 'index'
    },
    sidebar: {
      '/about/': ['', 'eratta.md', 'keywords.md'],
      '/credit/': [''],
      '/examples/': [
        '',
        'my-first-nuxt-app.md',
        'nuxt-api-examples.md',
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
      { text: '貢献', link: '/credit/' },
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
