"use strict";

const { Readable } = require("stream");

const data = ["some", "data", "to", "read"];

const createReadStream = () =>
  new Readable({
    read() {
      // null indicates that this is the end of the stream, at this point, the stream will emit an 'end' event.
      if (data.length === 0) this.push(null);
      else this.push(data.shift());
    },
    highWaterMark: 16,
    objectMode: true,
    // encoding: "utf8",
  });

const readable = createReadStream();

readable.on("data", (data) => {
  console.log("Got data ==========>", data);
});

readable.on("end", () => {
  console.log("Finished reading.");
});
