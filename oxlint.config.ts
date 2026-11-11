import { vuepress } from '@vuepress/oxlint-config'

export default vuepress({
  ignorePatterns: ['test/**'],
  options: {
    typeAware: true,
    typeCheck: true,
  },
})
