module.exports = {
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'prettier',
    'prettier/prettier',
    'prettier/standard',
    'prettier/vue',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  plugins: ['vue', 'prettier'],

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
        extensions: ['js', 'jsx', 'vue'],
        shouldMatchCase: false,
      },
    ],
    'prettier/prettier': 'error',
  },
}
