"use strict";

const { pipeline, Transform } = require("stream");
const { join } = require("path");
const { createReadStream, createWriteStream } = require("fs");

// We will need a transform stream to upper-case the content tp reproduce the read, upper-case, write scenario.

const createUppercaseStream = () =>
  new Transform({
    transform(chunk, _, next) {
      const upperCased = chunk.toString().toUpperCase();
      next(null, upperCased);
    },
  });

pipeline(
  createReadStream(__filename),
  createUppercaseStream(),
  createWriteStream(join(__dirname, "out.txt")),
  (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("finished writing");
  }
);
