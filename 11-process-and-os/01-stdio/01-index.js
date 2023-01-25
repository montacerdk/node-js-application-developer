"use strict";

// We'll use a simple command that generates random bytes in hex format.
// node -p "crypto.randomBytes(100).toString('hex')"

console.log("initialized");

process.stdin.pipe(process.stdout);

// node -p "crypto.randomBytes(100).toString('hex')" | node 01-index.js
