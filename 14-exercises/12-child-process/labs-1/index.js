"use strict";

const { spawnS, spawnSync } = require("child_process");

function exercise(myEnvVar) {
  // TODO return a child process with
  // a single environment variable set
  // named MY_ENV_VAR. The MY_ENV_VAR
  // environment variable's value should
  // be the value of the myEnvVar parameter
  // passed to this exercise function
  process.env.MY_ENV_VAR = myEnvVar;

  const sp = spawnSync(process.execPath, ["-p", "process.env"], {
    stdio: ["pipe", "inherit", "ignore"],
  });

  sp.stdout.pipe(process.stdout);

  return require("child_process").spawnSync(process.execPath, ["child.js"]);
}

module.exports = exercise;
