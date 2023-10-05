import { CoverageResult } from "./CoverageResult.js";
import parser from "./parser.js";

export default function total(filename) {
  const results = parser(filename);

  if (!results) {
    throw new Error("content is empty");
  }

  const coverageResult = new CoverageResult(results);
  return JSON.stringify({
    totalCoverage: coverageResult.coverage,
    branchCoverage: coverageResult.branchCoverage,
  });
}
//
