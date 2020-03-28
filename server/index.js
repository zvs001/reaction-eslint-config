
module.exports = {
  plugins: [
    'mocha',
  ],
  extends: [
    '@reaction-eslint/core',
    'plugin:mocha/recommended',
  ],
  rules: {
    "mocha/no-mocha-arrows": "off",
    "mocha/no-setup-in-describe": 0,
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.d.ts', '.html'],
      },
    },
  },
}
