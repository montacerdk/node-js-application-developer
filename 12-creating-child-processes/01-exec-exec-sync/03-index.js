"use strict";

const { execSync } = require("child_process");

// Using process.execPath ensures that no matter what, the subprocess will be executing the same version of Node

const nodePath = process.execPath;

console.log("nodePath ", nodePath);

execSync(`"${nodePath}" -e "console.error('subprocess stdio output')"`);
