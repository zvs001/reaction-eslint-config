
module.exports = {
  plugins: ['react-native'],
  extends: [
    '@reaction-eslint/react',
    'plugin:react-native/all'
  ],
  rules: {
    'react-native/no-color-literals': 'off',
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
