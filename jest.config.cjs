module.exports = {
  // ... other Jest configurations
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    // You might have other transformers here for CSS modules, images, etc.
  },
  setupFilesAfterEnv: ["./jest-setup.js"],
  // If you're using ES modules in Node.js for source files, you might also need:
  // extensionsToTreatAsEsm: ['.jsx'], // This might be needed if your source files are also ES modules
};
