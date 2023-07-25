module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["packages/**/*.{ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      /** https://swc.rs/docs/configuration/compilation#jsctransformreact */
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: false,
            dynamicImport: false,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};
