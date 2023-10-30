// eslint-disable-next-line node/no-missing-import
import test from "ava";

import { CoverageResult } from "../CoverageResult.js";

test("CoverageResult gets line coverage", async (t) => {
  const instance = new CoverageResult(parsed);

  const coverage = instance.coverage;

  t.is(coverage, 92.45);
});

test("CoverageResult gets branch coverage", async (t) => {
  const instance = new CoverageResult(parsed);

  const coverage = instance.branchCoverage;

  t.is(coverage, 87.5);
});

const parsed = [
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
    title: "",
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
    file: "utils/axios-handler.js",
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: {
      hit: 0,
      found: 0,
      details: [{ name: "axiosHandler", line: 26 }],
    },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: {
      hit: 0,
      found: 0,
      details: [{ name: "(anonymous_16)", line: 37 }],
    },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: {
      hit: 0,
      found: 0,
      details: [{ name: "gitbeakerWrapper", line: 66 }],
    },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: {
      hit: 0,
      found: 0,
      details: [{ name: "(anonymous_19)", line: 76 }],
    },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: {
      hit: 0,
      found: 0,
      details: [{ name: "(anonymous_20)", line: 90 }],
    },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 5, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 5, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [{ line: 1, hit: 7 }] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [{ line: 2, hit: 7 }] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [{ line: 3, hit: 7 }] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [{ line: 5, hit: 7 }] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [{ line: 6, hit: 7 }] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [{ line: 26, hit: 7 }] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 53, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 49, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: {
      hit: 0,
      found: 0,
      details: [{ line: 26, block: 0, branch: 0, taken: 5 }],
    },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: {
      hit: 0,
      found: 0,
      details: [{ line: 27, block: 1, branch: 0, taken: 5 }],
    },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: {
      hit: 0,
      found: 0,
      details: [{ line: 29, block: 2, branch: 0, taken: 15 }],
    },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: {
      hit: 0,
      found: 0,
      details: [{ line: 29, block: 2, branch: 1, taken: 12 }],
    },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: {
      hit: 0,
      found: 0,
      details: [{ line: 31, block: 3, branch: 0, taken: 1 }],
    },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: {
      hit: 0,
      found: 0,
      details: [{ line: 31, block: 4, branch: 0, taken: 3 }],
    },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: {
      hit: 0,
      found: 0,
      details: [{ line: 31, block: 4, branch: 1, taken: 11 }],
    },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: {
      hit: 0,
      found: 0,
      details: [{ line: 31, block: 5, branch: 0, taken: 14 }],
    },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 56, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 49, found: 0, details: [] },
  },
  {
    lines: { found: 0, hit: 0, details: [] },
    functions: { hit: 0, found: 0, details: [] },
    branches: { hit: 0, found: 0, details: [] },
  },
];
