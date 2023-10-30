#!/usr/bin/env node
/* eslint-disable node/no-unpublished-bin */

import total from "../src/index.js";

const [, , filename, gte] = process.argv;

process.exitCode = 0;

if (!filename) {
  process.stdout.write("Error: Filename not provided.\n");
  process.exitCode = 1;
  process.exit();
}

const result = total(filename);

const { totalCoverage, branchCoverage } = JSON.parse(result);

// console.log({ totalCoverage, branchCoverage });

let returnVal = `${result}`;
let min = 0;
if (gte) {
  const [gteStr, value] = gte.split("=");
  const isGte = gteStr === "--gte";
  min = isGte && !isNaN(parseInt(value)) ? parseFloat(value) : 0;
  process.exitCode = totalCoverage >= min && branchCoverage >= min ? 0 : 1;
  returnVal = "";
}

if (returnVal) {
  process.stdout.write(returnVal);
}

process.exit();
