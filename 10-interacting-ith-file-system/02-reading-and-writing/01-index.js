"use strict";

const { readFileSync } = require("fs");

const contents = readFileSync(__filename);
// const contents = readFileSync(__filename, { encoding: "utf8" });

console.log(contents);

// The above code will synchronously read its own contents into a buffer and then print the buffer.
