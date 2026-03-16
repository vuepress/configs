import * as fs from 'node:fs'
import * as path from 'node:path'
import type { UserConfig } from '@commitlint/types'

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', packages],
    'footer-max-line-length': [0],
  },
} satisfies UserConfig
