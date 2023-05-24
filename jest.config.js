module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
        '^.+\\.js$': 'babel-jest',
      },
  };
};