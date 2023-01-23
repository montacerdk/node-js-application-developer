"use strict";

const { join } = require("path");

const { readFileSync, writeFileSync } = require("fs");

const contents = readFileSync(__filename, { encoding: "utf8" }, (error) => {
  if (error) {
    console.error(error);
    return;
  }
});

// An options object can be added, with a flag option set to 'a' to open a file in append mode.

writeFileSync(join(__dirname, "out.txt"), contents.toUpperCase(), {
  flag: "a",
});

// If we run that same code again the out.txt file will have the altered code added to it.
// System flags: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fs_file_system_flags
