"use strict";

const { execSync } = require("child_process");

try {
  // If the subprocess exits with a non-zero exit code, the execSync function will throw.
  execSync(`"${process.execPath}" -e "process.exit(1)"`);
} catch (err) {
  console.error("CAUGHT ERROR:", err);
}
