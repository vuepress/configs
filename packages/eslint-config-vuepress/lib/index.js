module.exports = {
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**',
          '**/.vuepress/**',
          '**/.eslintrc.js',
          '**/jest.config.js',
          '**/jest.setup.js',
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
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
      },
    ],
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
        extensions: ['cjs', 'js', 'jsx', 'mjs', 'vue'],
        shouldMatchCase: false,
      },
    ],
  },
}
