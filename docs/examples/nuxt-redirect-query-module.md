---
title: 08. ミニマルな Nuxt モジュール例
---

# ミニマルな Nuxt モジュール例

GitHub: [potato4d/nuxt-beginners-guide/tree/master/packages/nuxt-redirect-query-module](https://github.com/potato4d/nuxt-beginners-guide/tree/master/packages/nuxt-redirect-query-module)

リダイレクトを提供するミニマルな Nuxt モジュールのサンプルです。

## より深く学ぶには……

Nuxt のモジュール開発は、モジュールのみで完結するもの、プラグイン機能と統合して利用するもの、ミドルウェア機能と連携して利用するもの、そして、 serverMiddleware と呼ばれる、 Node.js サーバーと連携して利用するものがあります。

このサンプルでは serverMiddleware の例を上げましたが、それぞれに応じて必要とされる知識は少しずつことなるため、実際に公開されているモジュールのコードを読んでみることをおすすめいたします。

筆者もいくつかモジュールを開発しており、それらは非常に小さなコードベースとなっておりますので、学習の一環で読んでみても良いでしょう。

- potato4d/nuxt-client-init-module (プラグインと連携するもの)
  - [https://github.com/potato4d/nuxt-client-init-module](https://github.com/potato4d/nuxt-client-init-module)
- potato4d/nuxt-basic-auth-module (この例と同じく、 serverMiddleware と連携するもの)
  - [https://github.com/potato4d/nuxt-basic-auth-module](https://github.com/potato4d/nuxt-basic-auth-module)

## 外部リンク

- GitHub: [potato4d/nuxt-beginners-guide/tree/master/packages/nuxt-redirect-query-module](https://github.com/potato4d/nuxt-beginners-guide/tree/master/packages/nuxt-redirect-query-module)
