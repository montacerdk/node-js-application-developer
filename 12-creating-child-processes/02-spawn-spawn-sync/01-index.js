"use strict";

const { spawnSync } = require("child_process");

const result = spawnSync(process.execPath, [
  "-e",
  `console.log('subprocess stdio output')`,
]);

console.log(result);

console.log(result.stdout.toString());

// While the execSync function returns a buffer containing the child process output.
// The spawnSync function returns an object containing information about the process that was spawned.
