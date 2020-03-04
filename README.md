1. npm run serve 开发
2. npm run build 准备打包
3. 将dist/index.html中所有的css，js链接改成./开头；相对路径
上线的项目都在dist目录下
4. 使用git-checkout -b new_branch _name，新建并切换分支
5. 分支名gh-pages（默认使用）
MIT github master 最稳定的版本；开源
gh-pages分支上把dist目录下的代码搞过去
把dist代码留下，其他的删除