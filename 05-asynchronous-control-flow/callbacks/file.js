// A callback is a function that will be called at some future point.
// This makes Callbacks a way to manage async control flow.
const { readFile } = require("fs");

// This function will read the content of the current file and print it on the console.
// The callback function will be called once reading file is finished.
readFile(__filename, (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
});
