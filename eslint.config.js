import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";


export default [
  pluginReactConfig,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["**/node_modules/"],
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    plugins: {
      prettier
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error", { "endOfLine": "auto" }]
    },
    settings: {
      "react": { version: "detect" },
    }
  },
];