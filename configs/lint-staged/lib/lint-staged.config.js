"use strict";

module.exports = {
    "*.{,m}js": ["eslint --fix"],
    "*.md": ["prettier --write"],
    "*.ts{,x}": ["eslint --fix"],
    "*.vue{,x}": ["eslint --fix"],
    "package{,-lock}.json": [
      "sort-package-json",
      "prettier --write"
    ],
};
