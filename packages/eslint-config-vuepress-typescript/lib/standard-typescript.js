const standard = require('eslint-config-standard')

/**
 * Rules that have same name and config
 * in both eslint and @typescript/eslint
 */
const equivalents = [
  'brace-style',
  'comma-spacing',
  'dot-notation',
  'func-call-spacing',
  'indent',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  // 'no-empty-function',
  'no-extra-parens',
  // 'no-extra-semi',
  'no-implied-eval',
  // 'no-loop-func',
  // 'no-magic-numbers',
  'no-redeclare',
  // 'no-shadow',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-constructor',
  'quotes',
  'semi',
  'space-before-function-paren',
]

/**
 * Rules that should be turned off
 *
 * May need to be replaced by other rules
 */
const shouldOff = ['camelcase', 'no-new-func']

const fromEntries = (arr) =>
  arr.reduce(
    (obj, [key, val]) => ({
      ...obj,
      [key]: val,
    }),
    {}
  )

module.exports = {
  rules: {
    ...fromEntries(shouldOff.map((name) => [name, 'off'])),

    ...fromEntries(equivalents.map((name) => [name, 'off'])),
    ...fromEntries(
      equivalents.map((name) => [
        `@typescript-eslint/${name}`,
        JSON.parse(JSON.stringify(standard.rules[name])),
      ])
    ),

    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        filter: {
          regex: '^__[A-Z]+(?:_[A-Z]+)*__$',
          match: false,
        },
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      standard.rules['comma-dangle'][0],
      {
        ...standard.rules['comma-dangle'][1],
        enums: standard.rules['comma-dangle'][1].arrays,
        generics: standard.rules['comma-dangle'][1].arrays,
        tuples: standard.rules['comma-dangle'][1].arrays,
      },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        enums: false,
        typedefs: false,
      },
    ],
  },
}
