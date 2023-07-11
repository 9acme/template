module.exports = {
  github: {
    release: false,
  },
  git: {
    tagName: '${version}',
    commitMessage: 'chore: v${version}',
    branch: '202307_uniappTemplate', // 推送到 202307_uniappTemplate 分支
  },
  npm: {
    publish: false,
  },
  hooks: {
    'after:bump': 'echo 更新版本成功',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
        // 此处可定义需要哪些放至进 CHANGELOG.md 里，
        // 默认只将 feat、fix写入日志
        types: [
          {
            type: 'init',
            section: '🎨初始化',
          },
          {
            type: 'feat',
            section: '✨新功能',
          },
          {
            type: 'fix',
            section: '🐞问题修复',
          },
          {
            type: 'style',
            section: '🌈样式',
          },
          {
            type: 'docs',
            section: '📃文档',
          },
        ],
      },
      infile: 'docs/CHANGELOG.md',
    },
  },
};
