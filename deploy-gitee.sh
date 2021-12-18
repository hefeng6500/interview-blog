#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

git config --global user.email "2443992009@qq.com"
git config --global user.name "hefeng6500"

git init
git add -A
git commit -m 'from local deploy'

git push -f git@gitee.com:hefeng6500/interview-blog.git master:gh-pages

cd -