#!/usr/bin/env node

const total = require("../src");
const [, , filename, gte] = process.argv;

if (!filename) {
  console.error(new Error("FilenameNotProvided"));
  process.exit(1);
}

const result = total(filename);

if (require.main !== module) {
  module.exports = () => result;
} else {
  let EXIT_CODE = 0;
  let returnVal = `${result}`;

  let min = 0;
  if (gte) {
    const [, value] = gte.split("=");
    min = !isNaN(parseInt(value)) ? parseFloat(value) : 0;
    EXIT_CODE = result > min ? 0 : 1;
    returnVal = `${EXIT_CODE}`;
  }

  process.stdout.write(returnVal);
  process.exit(EXIT_CODE);
}
