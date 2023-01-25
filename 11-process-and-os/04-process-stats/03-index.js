"use strict";

const stats = [process.memoryUsage()];

let iterations = 5;

while (iterations--) {
  const array = [];

  let index = 10000;

  // make the CPU do some work:
  while (index--) {
    array.push({ [Math.random()]: Math.random() });
  }

  stats.push(process.memoryUsage());
}

// Print a JSON in a table format.
console.table(stats);
