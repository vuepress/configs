import type { OxlintConfig } from '@meteorlxy/oxlint-config'
import { meteorlxy, config as meteorlxyConfig } from '@meteorlxy/oxlint-config'

const globals = {
  __VUEPRESS_VERSION__: 'readonly',
  __VUEPRESS_BASE__: 'readonly',
  __VUEPRESS_DEV__: 'readonly',
  __VUEPRESS_SSR__: 'readonly',
  __VUE_HMR_RUNTIME__: 'readonly',
  __VUE_PROD_DEVTOOLS__: 'readonly',
} satisfies NonNullable<OxlintConfig['globals']>

const rules = {
  'no-underscore-dangle': ['warn', { allow: ['__dirname'] }],
  'typescript/no-dynamic-delete': 'off',
  'typescript/no-non-null-assertion': 'off',
} satisfies NonNullable<OxlintConfig['rules']>

const withVuePlugin = (
  plugins: NonNullable<OxlintConfig['plugins']>,
): NonNullable<OxlintConfig['plugins']> =>
  plugins.includes('vue') ? plugins : [...plugins, 'vue']

export const vuepress = (userConfig: OxlintConfig = {}): OxlintConfig =>
  meteorlxy({
    ...userConfig,
    globals: {
      ...globals,
      ...userConfig.globals,
    },
    plugins: withVuePlugin(userConfig.plugins ?? meteorlxyConfig.plugins),
    rules: {
      ...rules,
      ...userConfig.rules,
    },
  })
