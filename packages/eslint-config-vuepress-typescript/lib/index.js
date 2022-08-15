const base = require('eslint-config-vuepress')

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'vuepress',
    'plugin:vue/vue3-recommended',
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
    // ==========
    // typescript
    // ==========
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    // ==========
    // import
    // ==========
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: base.rules[
          'import/no-extraneous-dependencies'
        ][1].devDependencies.flatMap((item) => {
          if (item.endsWith('.js')) {
            return [item, item.replace(/.js$/, '.ts')]
          }
          return item
        }),
        optionalDependencies:
          base.rules['import/no-extraneous-dependencies'][1]
            .optionalDependencies,
        peerDependencies:
          base.rules['import/no-extraneous-dependencies'][1].peerDependencies,
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    // ==========
    // import node esm
    // ==========
    // This rule currently does not interpret `module.exports = ...` as a `default` export,
    // which will report error when importing cjs in node esm
    'import/default': 'off',
    // Some cjs packages explicitly provide a `exports.default` export, which is required to
    // use `import { default as ... } from ...` syntax to be imported in node esm
    'import/no-named-default': 'off',

    // ==========
    // vue
    // ==========
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: [
          'cjs',
          'ctx',
          'js',
          'jsx',
          'mjs',
          'mts',
          'ts',
          'tsx',
          'vue',
        ],
        shouldMatchCase: false,
      },
    ],
  },
}
