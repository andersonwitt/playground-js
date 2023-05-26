module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', './jest.setup.js'],
    transform: {
        '^.+\\.js$': 'babel-jest',
      },
  };
};