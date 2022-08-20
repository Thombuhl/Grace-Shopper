module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    indent: [
      'error',
      2,
    ],
    camelcase: [
      'error',
      { properties: 'never' },
    ],
  },
};
