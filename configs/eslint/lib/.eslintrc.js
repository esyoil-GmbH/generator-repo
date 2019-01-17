"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    require.resolve("eslint-config-xo"),
    require.resolve("eslint-config-prettier"),
  ],
  plugins: ["eslint-plugin-prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
