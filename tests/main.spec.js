const test = require("ava");
const total = require("../src");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const FILEPATH = `${process.cwd()}/tests/fixtures/lcov.info`;
const T_COV = 96.52;

test("should run, best test ever.", (t) => {
  const result = total(FILEPATH);
  t.is(typeof result, "number");
  t.is(result, T_COV);
});

test("Should run as a CLI", async (t) => {
  const { stdout } = await exec("node ./bin/cmd.js ./tests/fixtures/lcov.info");
  t.is(stdout, `${T_COV}`);
});

test("Should exit(1) if lesser then equal 98", async (t) => {
  let { code } = await t.throwsAsync(() =>
    exec("node ./bin/cmd.js ./tests/fixtures/lcov.info --gte=98")
  );
  t.is(code, 1);
});

test("Should exit(0) if greater than equal then 90", async (t) => {
  const { stdout } = await exec(
    "node ./bin/cmd.js ./tests/fixtures/lcov.info --gte=90"
  );
  t.is(stdout, "0");
});

test("Should error on file missing", async (t) => {
  await t.throwsAsync(() => exec("node ./bin/cmd.js"));
});

test("Should error on file not exit", async (t) => {
  await t.throwsAsync(() => exec("node ./bin/cmd.js ./INVALID"));
});
