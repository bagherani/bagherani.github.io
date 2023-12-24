module.exports = {
  extends: ['next', 'turbo', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  plugins: ['turbo', 'sort-keys-fix', '@typescript-eslint'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/max-params': ['error', { max: 5 }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    curly: 'error',
    eqeqeq: 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'type',
          'internal',
          'object',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: '@/**',
            position: 'after',
          },
        ],
      },
    ],
    'max-params': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-lonely-if': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-unreachable': 'error',
    'no-unused-vars': 'off',
    'no-useless-catch': 'error',
    'require-await': 'error',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'spaced-comment': 'error',
  },
};
