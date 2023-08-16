module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxBracketSameLine: false,
        printWidth: 80,
        singleQuote: true,
      },
    ],
  },
};
