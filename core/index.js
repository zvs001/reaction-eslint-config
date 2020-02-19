
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    camelcase: 'off',
    'max-len': [2, 150],
    'no-use-before-define': 'off',
    'dot-notation': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'key-spacing': [2, { mode: 'minimum' }],
    'new-cap': 'off',
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    'linebreak-style': 'off',
    'jsx-no-bind': 'off',
    'class-methods-use-this': 'off',
    eqeqeq: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'import/default': 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'prefer-const': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'space-before-blocks': 'error',
    'brace-style': 'error',
    'arrow-spacing': 'error',
    'keyword-spacing': 'error',
    'space-infix-ops': ['error', { int32Hint: true }],
    'rest-spread-spacing': 'error',
    'no-multi-spaces': 'error',
    'computed-property-spacing': 'error',
    'import/no-unresolved': 'off', // use ts version rule
    'import/extensions': 'off',
    'no-param-reassign': 'off',

    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',


    'import/order':  ['error', {
      'newlines-between': 'never',
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: false,
      },
    }],
  },
}
