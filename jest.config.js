export default {
    testEnvironment: "node",
    setupFiles: [
        './jest.setup.js'
    ],
    testMatch: [
        '**/test/**/*.spec.js'
    ],
    coveragePathIgnorePatterns: [
        'node_modules',
        'test'
    ],
    transform: {
      "^.+\\.js$": "babel-jest"
    }
}