module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'vuepress',
    'prettier/@typescript-eslint',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  plugins: ['@typescript-eslint'],

  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
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
