import * as fs from 'node:fs'
import * as path from 'node:path'
import type { UserConfig } from '@commitlint/types'

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))
const scopes = packages.map((name) => name.replace(/-vuepress$/, ''))

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
    'footer-max-line-length': [0],
  },
} satisfies UserConfig
