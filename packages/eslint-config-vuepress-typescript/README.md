# eslint-config-vuepress-typescript

> ESLint config for VuePress Team

**DO NOT use it in your own project if you don't know what it's for**

## Install

```sh
npm i -D eslint-config-vuepress-typescript
```

## Usage

Create `.eslintrc.js`:

```js
module.exports = {
  extends: ['vuepress-typescript'],

  rules: {
    // override rules
  },
}
```

Create `.eslintignore`:

```
!.vuepress
```

## License

[MIT](https://github.com/vuepress/configs/blob/master/LICENSE) &copy; [VuePress Team](https://github.com/vuepress)
