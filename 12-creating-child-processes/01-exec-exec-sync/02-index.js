"use strict";

const { execSync } = require("child_process");

const cmd = process.platform === "win32" ? "dir" : "ls -al";

const output = execSync(cmd);

console.log(output.toString());
