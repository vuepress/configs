module.exports = {
  root: true,

  extends: [
    'standard',
    'prettier',
    'prettier/standard'
  ],

  plugins: [
    'prettier'
  ],

  rules: {
    'prettier/prettier': 'error',
  },
};
