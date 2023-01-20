"use strict";

const { createGzip } = require("zlib");

const transform = createGzip();

// Readable side of the Transform stream.
transform.on("data", (data) => {
  console.log("got gzip data", data.toString("base64"));
});

// Writable side of the Transform stream.
transform.write("first");

setTimeout(() => {
  transform.end("second");
}, 500);
