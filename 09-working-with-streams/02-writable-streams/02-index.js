"use strict";

const { Writable } = require("stream");

const createWriteStream = (data) => {
  return new Writable({
    write: (chunk, enc, next) => {
      data.push(chunk);
      next();
    },
    // decodeStrings: false,
    // objectMode: true,
  });
};

const data = [];

const writable = createWriteStream(data);

writable.on("finish", () => {
  console.log("finished writing", data);
});

writable.write("A\n");
writable.write("B\n");
writable.write("B\n");
writable.write(3);

writable.end("nothing more to write");
