"use strict";

const { join } = require("path");

const { readFileSync, writeFileSync } = require("fs");

const contents = readFileSync(__filename, { encoding: "utf8" });

writeFileSync(join(__dirname, "out.txt"), contents.toUpperCase());

// 'writeFileSync' function takes a path and a string or buffer and blocks the process until the file has been completely written.
