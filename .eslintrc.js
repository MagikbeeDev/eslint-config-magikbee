module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    'indent': ['error', 2],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
      },
    ],
    'brace-style': ['error', 'allman'],
    'prefer-promise-reject-errors': 'off',
    'camelcase': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'space-before-function-paren': 0,
  },
}
