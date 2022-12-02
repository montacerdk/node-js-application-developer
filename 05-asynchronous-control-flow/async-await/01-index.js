const { readFile } = require("fs").promises;

// The keywords async and await allow for an approach that looks stylistically similar to synchronous code.
async function run() {
  const contents = await readFile(__filename);
  console.log(contents.toString());
}

run().catch(console.error);
