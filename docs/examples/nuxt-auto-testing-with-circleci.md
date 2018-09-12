---
title: 05. Nuxt アプリケーションへの CircleCI による自動テスト
---

# Nuxt アプリケーションへの CircleCI による自動テスト

[![Image from Gyazo](https://i.gyazo.com/fbf2f9ee85efa176687cdf47679e0208.gif)](https://gyazo.com/fbf2f9ee85efa176687cdf47679e0208)

CircleCI の GUI 操作のスクリーンショットなどを書く

```yaml
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:8.9
    working_directory: ~/app
    steps:
      - checkout
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
      - run: yarn
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      - run: yarn test
      - run: yarn build
```

実際にテストが動いているところを書く

GitHub: [potato4d/nuxt-beginners-guide/tree/master/packages/nuxt-auto-testing-with-circleci](https://github.com/potato4d/nuxt-beginners-guide/tree/master/packages/nuxt-auto-testing-with-circleci)

### より深く学ぶには……

CircleCI を利用した自動テスト環境などについて、より深く知りたい場合は、 JSLounge Archives というWebサイトにて公開されている「ESLint + CircleCIハンズオン」の資料が参考になります。

あわせて「Vue + Jest ハンズオン」の資料も入手しておくと、テストについてより深く理解できるはずです。

[https://jslounge-archives.elevenback.jp/](https://jslounge-archives.elevenback.jp/)
