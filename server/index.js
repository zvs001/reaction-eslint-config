
module.exports = {
  plugins: [
    'mocha',
  ],
  extends: [
    '@reaction-eslint/core',
    'plugin:mocha/recommended',
  ],
  rules: {
    "mocha/no-mocha-arrows": "off"
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js', '.json', '.ts', '.tsx', '.ios.ts', '.android.tsx', '.d.ts'],
      },
    },
  },
}
