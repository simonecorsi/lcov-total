const Benchmark = require("benchmark");
const { format, for_mat } = require("../src/parser");
const FILEPATH = `${process.cwd()}/tests/fixtures/lcov.info`;
const suite = new Benchmark.Suite();

// add tests
suite
  .add("map()", function () {
    format(FILEPATH);
  })
  .add("for", function () {
    for_mat(FILEPATH);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
