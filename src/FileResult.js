export class FileResult {
  constructor(fileName, linesResult) {
    this._name = fileName;
    this._result = linesResult;
  }

  get fileName() {
    return this._name;
  }

  get executed() {
    return this._result.hit;
  }

  get total() {
    return this._result.found;
  }

  get coverage() {
    let coverage = (this.executed / this.total) * 100;
    return parseFloat(coverage.toFixed(2));
  }
}

export class CoverageResult {
  /**
   * @param {FileResult[]} fileResults
   */
  constructor(fileResults = []) {
    this._fileResults = fileResults;
  }

  get files() {
    return this._fileResults;
  }

  get coverage() {
    let total = 0;
    let executed = 0;
    this.files.forEach((fileResult) => {
      total += fileResult.total;
      executed += fileResult.executed;
    });
    let coverage = (executed / total) * 100;
    return parseFloat(coverage.toFixed(2));
  }
}
