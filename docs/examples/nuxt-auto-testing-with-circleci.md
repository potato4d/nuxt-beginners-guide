---
title: Nuxt アプリケーションへの CircleCI による自動テスト
---

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
