import * as fs from 'node:fs'
import * as path from 'node:path'

import { RuleConfigSeverity } from '@commitlint/types'
import type { UserConfig } from '@commitlint/types'

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [RuleConfigSeverity.Error, 'always', packages],
    'footer-max-line-length': [RuleConfigSeverity.Disabled],
  },
} satisfies UserConfig
