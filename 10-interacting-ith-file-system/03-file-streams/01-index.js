"use strict";

const { pipeline } = require("stream");
const { join } = require("path");

// 'createReadStream' and 'createWriteStream' methods which allow us to read and write files in chunks.
const { createReadStream, createWriteStream } = require("fs");

// This pattern is excellent if dealing with a large file because the memory usage will stay constant as the file is read in small chunks and written in small chunks.

pipeline(
  createReadStream(__filename),
  createWriteStream(join(__dirname, "out.txt")),
  (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("finished writing");
  }
);
