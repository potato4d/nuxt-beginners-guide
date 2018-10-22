---
title: 正誤表
---

# 正誤表

ここでは、書籍内の誤字および誤植について掲載しています。ここでは、事実と異なる記述や書籍内の手順を進めることができなくなるものを「致命的な誤字・誤植」として、それ以外のものを「その他の誤字・誤植」として取り扱います。

## 致命的なもの

### Qiita API のアクセストークンの形式について

本書では、第二章で Qiita API へとアクセスを行いますが、その際のトークン指定方法に誤りがあったため、以下のように設定するようにお願いたします。

- 正: <code>config.headers.common['Authorization'] =`Bearer ${process.env.QIITA_TOKEN}`</code>
- 誤: `config.headers.common['Authorization'] = process.env.QIITA_TOKEN`

### babel のメジャーバージョンアップに伴うパッケージの変更

> 以下の情報は 2018 年 10 月 22 日時点のものです。パッケージの情報は随時変わる可能性があります。

- 正: @babel/preset-env
- 誤: babel-preset-vue-app

本書では Jest を利用したテスティングにて述べられていますが、この際に利用する babel のビルド環境を、最新版 7.x にあわせたものとする必要があります。

現時点では最新で必要なパッケージは `@babel/preset-env` であり、書籍に利用されている `babel-preset-vue-app` では最新の要件を満たさないようになっています。

そのため、以下のコマンドを実行の上、 package.json に記述するパッケージ情報についても変更ください。

パッケージ:

```
$ yarn remove babel-preset-vue-app
$ yarn add -D @babel/preset-env
```

package.json:

```
{
  ...
  "babel": {
    "env": {
      "test": {
        "presets": [
          "@babel/preset-env"
        ]
      }
    }
  }
}
```

## ソースコードの typo など

### P.56

- 正: `state.users[user.id]`
- 誤: `state.user[user.id]`

### P.94

common.css を作成後、設定として追加するコードが漏れています(追加せずともアプリケーションは動作します)。

nuxt.config.js へ以下を追加:

```
module.exports = {
  ...
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/common.css'
  ],
  ...
}
```

## その他のもの

### P.145 1 行目 typo

- 正: 先頭
- 誤: 銭湯

### P.186

- 正: 必要が一つ
- 誤: 必要が重複

## もし新たに見つけた場合は……

もし誤字・誤植を見つけたかたは、筆者へメールもしくは Twitter にてご連絡いただけますと幸いです。また、サポートページにおいて見つけた場合は、 GitHub レポジトリの Issue や Pull Request による貢献をお待ちしております。

- Twitter: [https://twitter.com/potato4d](https://twitter.com/potato4d)
- E メール: [admin@elevenback.jp](mailto:admin@elevenback.jp)
- GitHub: [https://github.com/potato4d/nuxt-beginners-guide](https://github.com/potato4d/nuxt-beginners-guide)
