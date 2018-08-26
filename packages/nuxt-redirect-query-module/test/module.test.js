const cheerio = require('cheerio')
const { Nuxt, Builder } = require('nuxt')
const config = require('./fixture/nuxt.config')
const request = require('request-promise-native')

const url = (path) => `http://localhost:3000${path}`
const get = (path) => request(url(path))

describe('basic', () => {
  let nuxt

  beforeAll(async () => {
    if (process.env.NODE_ENV === 'development') return
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(3000)
  }, 100000)

  afterAll(async () => {
    if (process.env.NODE_ENV === 'development') return
    await nuxt.close()
  })

  test('/ へのリクエストが問題なく疎通する', async () => {
    const html = await get('/')
    const $ = cheerio.load(html)
    expect($('#test').text()).toBe('test')
  })

  test('/?redirect_to=/single へのリクエストが /single へとリダイレクトされる', async () => {
    const html = await get('/?redirect_to=/single')
    const $ = cheerio.load(html)
    expect($('#single').text()).toBe('single')
  })
})
