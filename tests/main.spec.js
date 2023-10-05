// eslint-disable-next-line node/no-missing-import
import test from "ava";
import { exec as ex } from "child_process";
import total from "../src/index.js";
import util from "util";

const exec = util.promisify(ex);

const FILEPATH = `${process.cwd()}/tests/fixtures/lcov.info`;
const T_COV = '{"totalCoverage":96.52,"branchCoverage":81.62}';

test("should run, best test ever.", (t) => {
  const result = total(FILEPATH);
  t.is(typeof result, "string");
  t.is(result, `${T_COV}`);
});

test("Should run as a CLI", async (t) => {
  const { stdout } = await exec("node ./bin/cmd.js ./tests/fixtures/lcov.info");
  t.is(stdout, `${T_COV}`);
});

test("Should exit(1) if lesser than 98", async (t) => {
  let { code } = await t.throwsAsync(() =>
    exec("node ./bin/cmd.js ./tests/fixtures/lcov.info --gte=98"),
  );
  t.is(code, 1);
});

test("Should exit(0) if greater than or equal to 80", async (t) => {
  const { stderr } = await exec(
    "node ./bin/cmd.js ./tests/fixtures/lcov.info --gte=80",
  );
  t.is(stderr, "");
});

test("Should exit(1) if checking for --gte=100", async (t) => {
  await t.throwsAsync(
    exec("node ./bin/cmd.js ./tests/fixtures/lcov.info --gte=100"),
  );
});

test("Should error on file missing", async (t) => {
  await t.throwsAsync(() => exec("node ./bin/cmd.js"));
});

test("Should error on file not exit", async (t) => {
  await t.throwsAsync(() => exec("node ./bin/cmd.js ./INVALID"));
});
