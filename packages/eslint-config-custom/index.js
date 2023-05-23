module.exports = {
  extends: [
    "next",
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",

  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "warn",
  },
  plugins: ["react-refresh"],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
