import type { EslintOptions } from '@meteorlxy/eslint-config'
import { meteorlxy } from '@meteorlxy/eslint-config'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

export const vuepress = async (
  options: EslintOptions,
): Promise<FlatConfig.Config[]> =>
  meteorlxy(
    {
      vue: true,
      ...options,
    },
    {
      languageOptions: {
        globals: {
          __VUEPRESS_VERSION__: 'readonly',
          __VUEPRESS_BASE__: 'readonly',
          __VUEPRESS_DEV__: 'readonly',
          __VUEPRESS_SSR__: 'readonly',
          __VUE_HMR_RUNTIME__: 'readonly',
          __VUE_OPTIONS_API__: 'readonly',
          __VUE_PROD_DEVTOOLS__: 'readonly',
        },
      },
    },
  )
