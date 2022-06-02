module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'vuepress',
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
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**',
          '**/.vuepress/**',
          '**/tsup.config.ts',
          '**/vitest.config.ts',
          '**/vuepress.config.ts',
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

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
