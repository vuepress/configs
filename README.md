# eslint-config-vuepress

> ESLint config for libs in the @vuepress organization

## Usage

Install:

```sh
npm i -D eslint-config-vuepress
```

In `.eslintrc.js`:

```js
module.exports = {
  extends: ['vuepress'],

  rules: {
    // override rules
  },
}
```

In `.eslintignore`:

```
!.vuepress
```

## License

[MIT](https://github.com/vuepress/configs/blob/master/LICENSE) &copy; [VuePress Community](https://github.com/vuepress)
