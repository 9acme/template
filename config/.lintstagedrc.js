module.exports = {
  'src/**/*.js': [
    'npx eslint -c config/.eslintrc.js --fix',
    'prettier --config config/.prettierrc.js --write',
  ],
  'src/**/*.json': ['prettier --config config/.prettierrc.js --write'],
  'src/**/*.(css|scss)': [
    'npx stylelint  --config config/.stylelintrc.js --fix',
  ],
  'src/**/*.html': ['prettier --config config/.prettierrc.js --write'],
  'src/**/*.vue': [
    'npx eslint -c config/.eslintrc.js --fix',
    'npx stylelint --config config/.stylelintrc.js --fix',
    'prettier --config config/.prettierrc.js --write',
  ],
};
