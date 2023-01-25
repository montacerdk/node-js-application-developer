"use strict";

const { Transform } = require("stream");

console.log("initialized");

const createUppercaseStream = () =>
  new Transform({
    transform(chunk, _, next) {
      const upperCased = chunk.toString().toUpperCase();
      next(null, upperCased);
    },
  });

// This will cause all the lowercase characters to become upperCase.

const upperCase = createUppercaseStream();

process.stdin.pipe(upperCase).pipe(process.stdout);

// node -p "crypto.randomBytes(100).toString('hex')" | node 02-index.js
