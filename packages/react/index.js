
module.exports = {
  plugins: ['prettier'],
  extends: [
    '@reaction-eslint/core',
  ],
  rules: {
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          '/.+Value$/',
          '/^animated.+/',
          '/.+Ref/',
          'state', // regex
          'constructor', // regex
          'render',
          '/^render.+/',
          '/^wrap.+/',
          '/^save.+Ref$/',
          '/^createHandler.+/',
          '/^handle.+/',
          'everything-else',
          'lifecycle',
        ],
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    // "react/jsx-max-props-per-line": "off",
    'react/jsx-wrap-multilines': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  globals: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  env: {
    jest: true,
  },
}
