#!/usr/bin/env sh
export CONVENTIONAL_GITHUB_RELEASER_TOKEN=313138610f53d79d11e7c881ec165f51b194ee77

npx gitmoji-changelog

git add -A
git commit -m ":bookmark: $1"
git tag $1
git push origin master --tags
npx conventional-github-releaser -p angular 
