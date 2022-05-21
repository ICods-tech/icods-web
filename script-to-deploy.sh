#bin/bash

cd ../vercel-deploy-web/icods-web/
git checkout master
rm -rf ./*

cd ../../icods-web
git checkout master
git pull
rm -rf node_modules
cp ./* ../vercel-deploy-web/icods-web
cd ../vercel-deploy-web/icods-web
git add .
git commit -m 'feat: upgrade version'
git push


