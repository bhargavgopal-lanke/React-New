module.exports = {
  // ... other Jest configurations
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    // You might have other transformers here for CSS modules, images, etc.
  },
  setupFilesAfterEnv: ["./jest-setup.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy", // Add this if you import CSS/SCSS files too
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "html"],
  coveragePathIgnorePatterns: ["/node_modules/"],

  // If you're using ES modules in Node.js for source files, you might also need:
  // extensionsToTreatAsEsm: ['.jsx'], // This might be needed if your source files are also ES modules
};
