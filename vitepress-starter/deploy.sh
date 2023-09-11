# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 将master构建后的代码合并到deploy-pages分支上，然后在deploy-pages分支上部署~
git push -f https://github.com/fiveeth/vitepress-five.git master:deploy-pages