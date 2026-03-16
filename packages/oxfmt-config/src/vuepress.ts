import type { FormatOptions } from 'oxfmt'

import { config } from './config'

export const vuepress = (
  userConfig?: Partial<FormatOptions>,
): FormatOptions => ({
  ...config,
  ...userConfig,
  sortImports: {
    ...config.sortImports,
    ...userConfig?.sortImports,
  },
  sortPackageJson:
    typeof userConfig?.sortPackageJson !== 'boolean'
      ? {
          ...config.sortPackageJson,
          ...userConfig?.sortPackageJson,
        }
      : userConfig.sortPackageJson,
  sortTailwindcss: userConfig?.sortTailwindcss
    ? {
        ...config.sortTailwindcss,
        ...userConfig.sortTailwindcss,
      }
    : undefined,
})
