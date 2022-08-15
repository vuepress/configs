module.exports = {
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    /**
     * import
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/tests/**',
          '**/test/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/.vuepress/**',
          '**/*.{test,spec}.js',
          '**/.commitlintrc.cjs',
          '**/.commitlintrc.js',
          '**/.eslintrc.cjs',
          '**/.eslintrc.js',
          '**/tsup.config.js',
          '**/vitest.config.js',
          '**/vuepress.config.js',
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

    /**
     * eslint
     */
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
