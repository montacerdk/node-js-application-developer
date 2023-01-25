"use strict";

setInterval(() => {
  console.log("this interval is keeping the process open");
}, 500);

// We can pass a different exit code to process.exit. Any non-zero code indicates failure.
// To indicate general failure we can use an exit code of 1.
// An exit code of 0 means the process executed successfully.

setTimeout(() => {
  console.log("exit after this");
  process.exit(1);
}, 1750);
