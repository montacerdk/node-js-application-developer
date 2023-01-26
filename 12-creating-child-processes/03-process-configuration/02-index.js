"use strict";

const { spawn } = require("child_process");

process.env.A_VAR_WE = "JUST SET";

// If we pass an options object with an env property the parent environment variables will be overwritten.

const sp = spawn(process.execPath, ["-p", "process.env"], {
  env: { SUBPROCESS_SPECIFIC: "ENV VAR" },
});

sp.stdout.pipe(process.stdout);
