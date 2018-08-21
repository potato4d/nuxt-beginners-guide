export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      // 実際の開発の場合は store.state.token などを参照することになるはずです
      config.headers.common['Authorization'] = `Bearer ${process.env.QIITA_TOKEN}`
    }
    return config
  })
}
