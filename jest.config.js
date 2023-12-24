/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverage: false, // use --coverage flag to run coverage
  collectCoverageFrom: [
    '**/*.{js,ts,tsx}',
    // exceptions
    '!**/specs/**/*.{js,ts,tsx}',
    '!**/*.d.ts',
    '!**/index.ts',
    '!**/.eslintrc.js',
    '!**/*.config.js',
    '!**/coverage/**',
    '!**/*.config.ts',
    '!**/.jest/**',
    '!**/.next/**',
    '!**/_next/**',
    '!**/mocks/**',
  ],
  coverageDirectory: '.jest/coverage',
  coverageReporters: ['lcov', 'text', 'json'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
  preset: 'ts-jest',
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(query-string|decode-uri-component|split-on-first|filter-obj)/)',
  ],
};
