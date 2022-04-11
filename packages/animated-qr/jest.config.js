module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/jestSetup.ts'],
  testMatch: [ "**/__tests__/**/*.spec.ts?(x)" ]
}
