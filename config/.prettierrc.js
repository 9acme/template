module.exports = {
  semi: true, // 分号
  singleQuote: true, // 单引号
  overrides: [
    {
      files: '*.vue',
      options: {
        embeddedLanguageFormatting: 'off',
        htmlWhitespaceSensitivity: 'ignore',
        css: {
          uppercaseHex: true,
        },
      },
    },
  ],
};
