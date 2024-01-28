module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'eslint-plugin-prettier',
    'eslint-config-prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/html-closing-bracket-newline': [2, { multiline: 'never' }],
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-nested-ternary': 0,
    'no-undef': 0,
    'no-async-promise-executor': 0,
    'no-use-before-define': 0,
    indent: 0,
    camelcase: 0,
    'object-curly-newline': 0,
    'class-methods-use-this': 0,
    'prefer-destructuring': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/prefer-default-export': 0,
    'vue/multi-word-component-names': 0,
    'eslint-disable-next-line': 0,
    'import/extensions': [
      0,
      'always',
      {
        js: 'never',
        vue: 'never',
        json: 'never',
      },
    ],
    'import/no-unresolved': [
      0,
      {
        caseSensitive: false,
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
  },
  globals: {
    require: true,
    uni: true,
  },
};
