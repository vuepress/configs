module.exports = {
  extends: ['standard', 'plugin:import/recommended', 'prettier'],

  globals: {
    __VUEPRESS_VERSION__: 'readonly',
    __VUEPRESS_BASE__: 'readonly',
    __VUEPRESS_DEV__: 'readonly',
    __VUEPRESS_SSR__: 'readonly',
    __VUE_HMR_RUNTIME__: 'readonly',
    __VUE_OPTIONS_API__: 'readonly',
    __VUE_PROD_DEVTOOLS__: 'readonly',
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    // ==========
    // import
    // ==========
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/e2e/**',
          '**/tests/**',
          '**/test/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/.vuepress/**',
          '**/*.{cy,spec,test}.{js.ts}',
          '**/.commitlintrc.{js,cjs}',
          '**/.eslintrc.{js,cjs}',
          '**/cypress.config.{js.ts}',
          '**/tsup.config.{js.ts}',
          '**/vitest.config.{js.ts}',
          '**/vuepress.config.{js.ts}',
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // ==========
    // import node esm
    // ==========
    // This rule somehow reports FP in node esm
    'import/no-unresolved': 'off',

    // ==========
    // eslint
    // ==========
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
      },
    ],
  },
}
