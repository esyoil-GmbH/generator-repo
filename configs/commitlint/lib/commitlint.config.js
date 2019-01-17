"use strict";

const { reduce, mergeDeepRight } = require("ramda");

module.exports = reduce(mergeDeepRight, {}, [
  require("@commitlint/config-lerna-scopes"),
  require("@commitlint/config-conventional"),
]);
