# vuepress-starter

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.com/Wildlifes/vuepress-starter.svg?branch=master)](https://travis-ci.com/Wildlifes/vuepress-starter)

个人学习了解 vuepress 项目使用

`.github` 文件夹中存放了 pull request 和 issue 的模版

## usage

```bash
# 开发
yarn docs:dev

# 打包
yarn docs:build

# 规范提交
yarn cz

# 部署github page
yarn gh-page:sh
yarn gh-page

# 修改对应版本，打上tag
yarn release
# 第一次提交
yarn release --first-release
# 更新版本
yarn release --release-as {major,minor,patch}
# 更新版本号
yarn release --release-as 1.1.0

#推送对应的
yarn git:push
# 需要npm 发布就需要publish
npm publish

#github release版本更新
github-release -t GITHUB_TOKEN
# 第一次
github-release -t GITHUB_TOKEN -r 0
```

## Install

安装 commitizen

```bash
yarn add commitizen -D
commitizen init cz-conventional-changelog --save-dev --save-exact
```

安装 commitlint

```bash
yarn add --D @commitlint/{config-conventional,cli}
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

`package.json`添加 `husky`设置

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

安装 conventional-github-releaser

```bash
yarn add conventional-github-releaser -D
```

提交步骤

1. 更新了文件
2. yarn cz 提交更新
3. yarn release 更新版本 、git 打上 tag 、提交 package.json 和 CHANGELOG.md
4. yarn git:push git 提交所有 tag
5. yarn github-release 更新 github release 版本 信息
