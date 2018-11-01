module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
  // coverageThreshold: {
  //   global: {
  //     statements: 0,
  //     branches: 0,
  //     functions: 0,
  //     lines: 0,
  //   },
  //   './src/shared/utils.js': {
  //     statements: 0,
  //     branches: 0,
  //     functions: 0,
  //     lines: 0,
  //   },
  // },
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
  ],
}