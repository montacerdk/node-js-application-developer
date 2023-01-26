"use strict";

const { spawnSync } = require("child_process");

// If a spawnSync process exits with a non-zero exit code, it does not throw.
// So, no need for try/catch.

try {
  const result = spawnSync(process.execPath, [`-e`, `process.exit(1)`]);

  console.log(result);
} catch (error) {
  console.error(error);
}
