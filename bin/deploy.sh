#!/usr/bin/env sh

set -e

yarn docs:build

cd vuepress

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Wildlifes/vuepress-starter.git master:gh-pages