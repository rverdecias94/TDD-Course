import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app/pass_checker';
const baseTestDir = '<rootDir>/src/test/pass_checker';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    `${baseDir}/**/*.ts`
  ],
  testMatch: [
    `${baseTestDir}/**/*test.ts`
  ],
  setupFiles: [
    '<rootDir>/src/test/server_app3/utils/config.ts'
  ]
}

export default config;