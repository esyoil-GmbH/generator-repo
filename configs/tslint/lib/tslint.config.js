"use strict";

const path = require("path");

module.exports = {
  extends: [
    require.resolve("tslint/lib/configs/latest"),
    require.resolve("tslint-config-prettier"),
  ],
  rules: {
    "interface-name": [true, "never-prefix"],
    "interface-over-type-literal": false,
    prettier: true,
  },
  rulesDirectory: [
    path.dirname(require.resolve("tslint-plugin-prettier/rules")),
  ],
};
