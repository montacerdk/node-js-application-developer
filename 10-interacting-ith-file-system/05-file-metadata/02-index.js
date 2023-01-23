"use strict";

const { readdirSync, statSync } = require("fs");

const files = readdirSync(".");

// There are four stats available for files:

// -> Access time.
// -> Change time.
// -> Modified time.
// -> Birth time.

// Modified time only applies to writes, whereas change time applies to writes and any status changes such as changing permissions or ownership.

for (const name of files) {
  const stat = statSync(name);
  const typeLabel = stat.isDirectory() ? "dir: " : "file: ";

  const { atime, birthtime, ctime, mtime } = stat;

  console.group(typeLabel, name);
  console.log("atime:", atime.toLocaleString());
  console.log("ctime:", ctime.toLocaleString());
  console.log("mtime:", mtime.toLocaleString());
  console.log("birthtime:", birthtime.toLocaleString());
  console.groupEnd();
  console.log();
}
