import js from "@eslint/js";
import eslintConfigAirbnbBase from "eslint-config-airbnb-base";
import eslintPluginImport from "eslint-plugin-import";
import globals from "globals";
export default [
  js.configs.recommended,
  eslintConfigAirbnbBase,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
    },
  },
];
