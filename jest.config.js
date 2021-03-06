const env = require('./src/test/mock/env')

const config = {
  roots: [
    '<rootDir>/src/',
  ],
  testRegex: 'test\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
    env,
  },

  collectCoverageFrom: [
    '<rootDir>/**/*.{js,ts}',
    '!**/*.d.ts',
  ],
  coverageDirectory: '<rootDir>/out/coverage',
}

module.exports = config
