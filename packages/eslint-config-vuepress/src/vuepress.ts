import type { EslintOptions } from '@meteorlxy/eslint-config'
import { meteorlxy, rules } from '@meteorlxy/eslint-config'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import { extendsOverrides } from './utils'

export interface VuepressOptions extends Omit<EslintOptions, 'react'> {
  vue?: Exclude<EslintOptions['vue'], boolean>
}

export const vuepress = async (
  options: VuepressOptions,
  ...customConfigs: FlatConfig.Config[]
): Promise<FlatConfig.Config[]> =>
  meteorlxy(
    extendsOverrides(options, {
      javascript: {
        overrides: {
          'no-underscore-dangle': ['warn', { allow: ['__dirname'] }],
        },
      },
      typescript: {
        overrides: {
          '@typescript-eslint/naming-convention': [
            ...rules.typescriptRules['@typescript-eslint/naming-convention'],
            {
              selector: 'variable',
              modifiers: ['const', 'global'],
              format: null,
              filter: {
                regex: '^(__dirname)$',
                match: true,
              },
            },
          ],
          '@typescript-eslint/no-dynamic-delete': 'off',
          '@typescript-eslint/no-non-null-assertion': 'off',
        },
      },
      vue: {
        overrides: {
          'vue/multi-word-component-names': ['error', { ignores: ['Layout'] }],
        },
      },
    }),
    {
      name: 'vuepress/base',
      languageOptions: {
        globals: {
          __VUEPRESS_VERSION__: 'readonly',
          __VUEPRESS_BASE__: 'readonly',
          __VUEPRESS_DEV__: 'readonly',
          __VUEPRESS_SSR__: 'readonly',
          __VUE_HMR_RUNTIME__: 'readonly',
          __VUE_PROD_DEVTOOLS__: 'readonly',
        },
      },
    },
    ...customConfigs,
  )
