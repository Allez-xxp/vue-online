1. npm run serve 开发
2. npm run build 准备打包
3. 将dist/index.html中所有的css，js链接改成./开头；相对路径
上线的项目都在dist目录下
4. git checkout -b gh-pages,新建并切换分支
删除代码，就把dist/所有代码放到根目录下
5. git push origin gh-pages提交到gh-pages分支
源码在根目录下