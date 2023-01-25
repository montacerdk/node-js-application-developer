"use strict";

// Process uptime is the amount of seconds (with 9 decimal places) that the process has been executing for.

console.log("Process Uptime", process.uptime());

setTimeout(() => {
  console.log("Process Uptime", process.uptime());
}, 1000);
