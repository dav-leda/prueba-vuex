#!/usr/bin/env sh
# abort on errors
set -e
# Para NPM usar npm run build:
yarn run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:dav-leda/prueba-vuex.git master:gh-pages
cd -
