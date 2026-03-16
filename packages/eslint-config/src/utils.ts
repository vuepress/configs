import type { VuepressOptions } from './vuepress'

type OptionsWithOverrides = {
  [K in keyof VuepressOptions as Required<VuepressOptions>[K] extends {
    overrides?: unknown
  }
    ? K
    : never]: VuepressOptions[K]
}

export const extendsOverrides = (
  options: VuepressOptions,
  extended: OptionsWithOverrides,
): VuepressOptions => ({
  ...options,
  ...Object.fromEntries(
    Object.entries(extended).map(([key, value]) => [
      key,
      {
        ...options[key as keyof OptionsWithOverrides],
        overrides: {
          ...value.overrides,
          ...options[key as keyof OptionsWithOverrides]?.overrides,
        },
      },
    ]),
  ),
})
