const { readFile } = require("fs");

const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename);

const print = (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
};

// The callback for each readFile call would be called relative to the size of the file regardless of which order they began to be read.
// Will print smallFile first and bigFile last.
readFile(bigFile, print);
readFile(mediumFile, print);
readFile(smallFile, print);
