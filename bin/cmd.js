#!/usr/bin/env node

const total = require("../src");
const [, , filename] = process.argv;

if (!filename) {
  console.error(new Error("FilenameNotProvided"));
  process.exit(1);
}

const result = total(filename);

if (require.main !== module) {
  module.exports = () => result;
} else {
  process.stdout.write(String(result));
}
