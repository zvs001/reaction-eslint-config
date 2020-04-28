module.exports = {
  plugins: ['prettier', 'react', 'react-hooks'],
  extends: ['airbnb', '@reaction-eslint/core', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        eslintIntegration: true,
        printWidth: 120,
      },
    ],

    // react rules
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
    'import/extensions': [
      'error',
      {
        jsx: 'never',
        tsx: 'never',
        ts: 'never',
      },
    ],

    // eslint rules
    'arrow-parens': 'error',

    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] }],
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
