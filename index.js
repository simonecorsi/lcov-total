const total = require("./src");

const FILEPATH = `${process.cwd()}/tests/fixtures/lcov.info`;
total(FILEPATH);
