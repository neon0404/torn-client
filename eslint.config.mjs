// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginJest from "eslint-plugin-jest";
import globals from "globals";

export default tseslint.config(
  { ignores: ["dist/", "node_modules/", "docs/"] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  pluginJest.configs["flat/recommended"],
  prettierConfig,
  pluginPrettierRecommended,
);
