"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/essential",
    "@vue/typescript",
  ],
  plugins: ["eslint-plugin-prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
