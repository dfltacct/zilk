module.exports = {
  moduleNameMapper: {
    "lodash-es": "lodash",
    "chart.js": "<rootDir>/node_modules/chart.js/dist/chart.mjs",
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
