#!/usr/bin/env node
const fs = require("node:fs")

const calculateFileBytes = (filePath: string) => {
  // check if filePath points to a valid file
  try {
    const data = fs.statSync(filePath);
    // get fileSize
    // log the fileSize in bytes
    console.log(data.size, filePath);
  } catch (err) {
    console.error("Error occured while reading file:", filePath, "\n", err);
  }
};

const perfromAction = (flag: string, filePath: string = "") => {
  switch (flag) {
    case "-c":
      calculateFileBytes(filePath);
      break;
    default:
      console.log("Unknown flag:", flag);
  }
};

const args = process.argv.slice(2);
// console.log("args:", args);

const flag = args[0];
const filePath = args[1];

if (flag) {
  perfromAction(flag, filePath);
}
