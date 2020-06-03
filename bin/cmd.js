#!/usr/bin/env node

const total = require("../src");
const [, , filename] = process.argv;

const result = total(filename);

if (require.main !== module) {
  module.exports = () => result;
} else {
  process.stdout.write(String(result));
}
