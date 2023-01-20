"use strict";

const { Readable } = require("stream");

// Readable.from utility method which creates streams from iterable data structures.

const readable = Readable.from(["some", "data", "to", "read"]);

// Readable.from utility function sets objectMode to true

readable.on("data", (data) => {
  console.log("got data", data);
});

readable.on("end", () => {
  console.log("finished reading");
});
