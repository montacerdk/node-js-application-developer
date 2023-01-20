"use strict";

const fs = require("fs");

// A writable stream could be used to write a file, write data to an HTTP response, or write to the terminal.
// The Writable constructor inherits from the Stream constructor which inherits from the EventEmitter constructor -> writable streams are event emitters.

const writable = fs.createWriteStream("./out.txt");

writable.on("finish", () => {
  console.log("finished writing");
});

writable.write("A\n");
writable.write("B\n");
writable.write("C\n");

writable.end("nothing more to write");
