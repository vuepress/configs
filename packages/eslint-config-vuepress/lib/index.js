module.exports = {
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  rules: {
    // ==========
    // import
    // ==========
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/tests/**',
          '**/test/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/.vuepress/**',
          '**/*.{test,spec}.{js.ts}',
          '**/.commitlintrc.{js,cjs}',
          '**/.eslintrc.{js,cjs}',
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
