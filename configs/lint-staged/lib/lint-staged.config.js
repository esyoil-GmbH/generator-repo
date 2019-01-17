"use strict";

module.exports = {
  linters: {
    "*.{,m}js": ["eslint --ignore-pattern '!*' --fix", "git add"],
    "*.md": ["prettier --write", "git add"],
    "*.ts{,x}": ["tslint --fix", "git add"],
    "package{,-lock}.json": [
      "sort-package-json",
      "prettier --write",
      "git add",
    ],
  },
};
