"use strict";

const { Transform } = require("stream");
const { scrypt } = require("crypto");

// Transform stream.
const createTransformStream = () =>
  new Transform({
    decodeStrings: false,
    encoding: "hex",
    transform: (chunk, enc, next) => {
      // Salt cryptography.
      scrypt(chunk, "a-salt", 32, (err, key) => {
        if (err) {
          next(err);
          return;
        }
        next(null, key);
      });
    },
  });

const transform = createTransformStream();

transform.on("data", (data) => {
  console.log("got data:", data);
});

transform.write("A\n");
transform.write("B\n");
transform.write("C\n");

transform.end("nothing more to write");

// The PassThrough constructor inherits from the Transform constructor. It's essentially a transform stream where no transform is applied.
