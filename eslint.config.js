import process from 'node:process'
import { env, vuepress } from 'eslint-config-vuepress'

const shouldCheckTest = process.env.CHECK_TEST === 'true' || env.IS_EDITOR

export default vuepress({
  ignores: shouldCheckTest ? [] : ['test/**'],
})
