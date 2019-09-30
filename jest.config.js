/**
 * jest config
 * 
 * @see https://jestjs.io/docs/ja/configuration
 */
module.exports = {
  verbose: true,
  preset: "react-native",
  moduleFileExtensions:  ["js", "json", "jsx", "ts", "tsx", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
        isolatedModules: true,
        tsConfig: "./tsconfig.json",
    },
  },
//  setupFiles: [
//    "<rootDir>/__tests__/setup.js",
//  ],
  testMatch: [
    "<rootDir>/__tests__/**/*.test.(ts|tsx)"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!react-native|react-native-firebase|react-native-google-signin|react-native-fbsdk|native-base|native-base-shoutem-theme|@shoutem/theme|@shoutem/animation|@shoutem/ui|tcomb-form-native)",
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/__tests__/**",
    "!**/__mocks__/**",
  ],
  coverageDirectory: "./reports/coverage/",
  setupFilesAfterEnv: ["jest-enzyme", "<rootDir>/__tests__/setup.js"],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
      "enzymeAdapter": "react16",
  },  
  moduleNameMapper: {
    "^@Types/(.+)": "<rootDir>/types/$1",
    "^@Config/(.+)": "<rootDir>/config/$1",
    "^@Component/(.+)": "<rootDir>/src/components/$1",
    "^@Lib/(.+)": "<rootDir>/src/libs/$1",
    "^@Store/(.+)": "<rootDir>/src/stores/$1",
    "^@Middleware/(.+)": "<rootDir>/src/middlewares/$1",
    "^@Logic/(.+)": "<rootDir>/src/logics/$1",
  }
}
