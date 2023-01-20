"use strict";

const fs = require("fs");

// A readable stream could be used to read a file. (EX: Http request, command prompt file).
// Readable inherits form Stream inherits form EventEmitter, so readable streams are event emitters.
// As data becomes available, a readable stream emits a 'data' event.

// Instantiates an instance of the Readable constructor and then causes it to emit data event.
// highWaterMark default value 16kb
const readable = fs.createReadStream(__filename, {
  // highWaterMark: 16
});

readable.on("data", (data) => {
  console.log("Got data ==========> ", data);
});

readable.on("end", () => {
  console.log("Finished reading.");
});
