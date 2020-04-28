module.exports = {
  plugins: ['mocha', 'chai-expect', 'chai-friendly'],
  extends: [
    '@reaction-eslint/core',
    'plugin:mocha/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:chai-expect/recommended',
  ],
  rules: {
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-setup-in-describe': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts'] }],
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
