"use strict";

const outputStats = () => {
  const uptime = process.uptime();

  // System and user CPU usage.
  const { user, system } = process.cpuUsage();

  console.log(
    "\nuptime = " + uptime,
    "\nuser = " + user,
    "\nsystem = " + system,
    "\n(user + system) / 1000000 = " + (user + system) / 1000000
  );
};

outputStats();

setTimeout(() => {
  outputStats();

  const now = Date.now();

  // Make the CPU do some work.
  while (Date.now() - now < 5000) {}

  outputStats();
}, 500);
