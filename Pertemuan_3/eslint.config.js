import globals from "globals";
import js from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  // Konfigurasi untuk file utama (src)
  {
    files: ["src/**/*.{js,jsx}"],
    ignores: ["dist/"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
      "react/prop-types": "off", // Matikan jika tidak menggunakan PropTypes
    },
  },

  // Konfigurasi khusus untuk file Test
  {
    files: ["**/__tests__/**/*.{js,jsx}"],
    ...pluginJest.configs["flat/recommended"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...pluginJest.configs["flat/recommended"].rules,
    },
  },
];
