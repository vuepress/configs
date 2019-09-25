module.exports = {
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:vue/recommended',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  plugins: ['vue', '@typescript-eslint', 'prettier'],

  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        shouldMatchCase: false,
      },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'prettier/prettier': 'error',
  },
}
