module.exports = {
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: [['lcov', { projectRoot: '../..' }]],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.test.ts', '!src/**/index.ts'],
  projects: [
    {
      testEnvironment: 'node',
      preset: 'ts-jest',
      coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
      displayName: 'unit',
      testMatch: ['<rootDir>/**/*.test.ts'],
      testPathIgnorePatterns: ['it.test.ts'],
      setupFiles: ['<rootDir>/test/setupEnv.ts'],
      setupFilesAfterEnv: ['<rootDir>/test/setupMockserver.ts'],
    },
  ],
};
