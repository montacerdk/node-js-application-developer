"use strict";

const { spawn } = require("child_process");
const { parse } = require("path");

const { IS_CHILD } = process.env;

// we're executing the same file twice.

if (IS_CHILD) {
  console.log("Subprocess cwd:", process.cwd());
  console.log("env", process.env);
} else {
  console.log("First execution ... ");

  const { root } = parse(process.cwd());

  const sp = spawn(process.execPath, [__filename], {
    cwd: root,
    env: { IS_CHILD: "1" },
  });

  sp.stdout.pipe(process.stdout);
}
