"use strict";

const assert = require("assert");
const {
  Readable,
  Writable,
  Transform,
  PassThrough,
  pipeline,
} = require("stream");

const createWritable = () => {
  const sink = [];

  const writable = new Writable({
    write(chunk, enc, cb) {
      sink.push(chunk.toString().toUpperCase());
      cb();
    },
  });

  writable.sink = sink;

  return writable;
};

const readable = Readable.from(["a", "b", "c"]);
const writable = createWritable();

// TODO: replace the pass through stream with a transform stream that upperCases incoming characters.

const transform = new Transform({
  transform: (chunk, _, next) => {
    const upperCased = chunk.toString().toUpperCase();
    next(null, upperCased);
  },
});

pipeline(readable, transform, writable, (err) => {
  assert.ifError(err);
  assert.deepStrictEqual(writable.sink, ["A", "B", "C"]);
  console.log("passed!");
});
