export class CoverageResult {
  constructor(parsedFile) {
    this._parsedFile = parsedFile;
  }

  get files() {
    return this._parsedFile;
  }

  get coverage() {
    let total = 0;
    let executed = 0;

    this.files.forEach((fileResult) => {
      const { lines } = fileResult;

      if (!lines) return;

      total += lines.found;
      executed += lines.hit;
    });

    if (!total) throw new Error("Can not find any lines");

    let coverage = (executed / total) * 100;

    return parseFloat(coverage.toFixed(2));
  }

  get branchCoverage() {
    let total = 0;
    let executed = 0;

    this.files.forEach((fileResult) => {
      const { branches } = fileResult;

      if (!branches) return;

      total += branches.found;
      executed += branches.hit;
    });

    if (!total) throw new Error("Can not find any branches");

    let coverage = (executed / total) * 100;

    return parseFloat(coverage.toFixed(2));
  }
}
