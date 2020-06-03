const test = require("ava");
const total = require("../src");

const FILEPATH = `${process.cwd()}/tests/fixtures/lcov.info`;

test("should run, best test ever.", (t) => {
  const result = total(FILEPATH);
  t.is(typeof result, "number");
  t.is(result, 96.52);
});
