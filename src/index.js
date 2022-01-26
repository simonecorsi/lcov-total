import { FileResult, CoverageResult } from "./FileResult.js";
import parser from "./parser.js";

export default function total(filename) {
  const results = parser(filename);

  if (!results) {
    throw new Error("content is empty");
  }

  /** @type FileResult[] */
  const fileResults = results.map((result) => {
    return new FileResult(result.file, result.lines);
  });
  const coverageResult = new CoverageResult(fileResults);
  return coverageResult.coverage;
}
//
