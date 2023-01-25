"use strict";

setInterval(() => {
  console.log("this interval is keeping the process open");
}, 500);

// Force process to exit.

setTimeout(() => {
  console.log("exit after this");
  process.exit();
}, 1750);

// verify process code.
// echo $?
