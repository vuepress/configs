import { vuepress } from '@vuepress/oxfmt-config'
import { defineConfig } from 'oxfmt'

export default defineConfig(
  vuepress({
    ignorePatterns: ['CHANGELOG.md', 'lerna.json'],
  }),
)
