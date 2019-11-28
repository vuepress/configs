module.exports = {
  extends: [
    'vuepress',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
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
  },
}
