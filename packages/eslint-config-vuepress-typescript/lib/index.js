module.exports = {
  extends: [
    'vuepress',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    require.resolve('./standard-typescript'),
    'prettier',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },

  plugins: ['@typescript-eslint'],

  rules: {
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
