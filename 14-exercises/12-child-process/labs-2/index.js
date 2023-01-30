"use strict";

const { spawn } = require("child_process");

function exercise(command, args) {
  let cp = spawn(command, args, {
    stdio: ["ignore", "inherit", "pipe"],
  });

  return cp;
}

module.exports = exercise;
