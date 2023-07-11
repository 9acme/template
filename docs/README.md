# 新建项目需要修改如下
- 修改`package.json`中的`version`字段
- 修改`config/.release-it.js`中的分支名`branch`
  ```js
  git: {
    tagName: '${version}',
    commitMessage: 'chore: v${version}',
    branch: 'main', // 推送到 main 分支
  },
- 执行commit命令之前必须先初始化husky
- 执行`npm run husky`命令初始化husky
- 需要先推送远程仓库, 再生成第一个changelog