module.exports = {
  root: true,
  extends: ['vuepress'],
  overrides: [
    // typescript configs
    {
      files: ['*.ts', '*.vue'],
      extends: ['vuepress-typescript'],
    },
  ],
}
