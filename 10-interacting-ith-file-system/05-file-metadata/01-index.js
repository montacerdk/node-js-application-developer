"use strict";

const { readdirSync, statSync } = require("fs");

const files = readdirSync(".");

for (const name of files) {
  const stat = statSync(name);
  const typeLabel = stat.isDirectory() ? "dir: " : "file: ";

  console.log(typeLabel, name);
}

// file:  01-index.js
// file:  02-index.js
// dir:  a-dir
