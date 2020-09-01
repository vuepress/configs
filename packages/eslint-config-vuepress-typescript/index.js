const standard = require('eslint-config-standard')

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'vuepress',
    'prettier/@typescript-eslint',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json', 'packages/**/tsconfig.json'],
    extraFileExtensions: ['.vue'],
  },

  plugins: ['@typescript-eslint'],

  rules: {
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor':
      standard.rules['no-array-constructor'],

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members':
      standard.rules['no-dupe-class-members'],

    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': standard.rules['no-implied-eval'],

    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': standard.rules['no-throw-literal'],

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      standard.rules['no-unused-expressions'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': standard.rules['no-unused-vars'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define':
      standard.rules['no-use-before-define'],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
      standard.rules['no-useless-constructor'],

    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',

    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
        shouldMatchCase: false,
      },
    ],
  },
}
