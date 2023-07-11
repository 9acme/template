module.exports = {
  // 继承@commitlint/config-conventional规范
  extends: ['cz'],
  rules: {
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
};
