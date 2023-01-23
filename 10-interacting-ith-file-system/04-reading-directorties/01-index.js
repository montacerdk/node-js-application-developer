const { readdirSync, readdir } = require("fs");
const { readdir: readdirPromise } = require("fs").promises;

// Synchronous, callback-based and promise-based.

try {
  console.log("sync", readdirSync(__dirname));
} catch (err) {
  console.error(err);
}

readdir(__dirname, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("callback", files);
});

async function run() {
  const files = await readdirPromise(__dirname);
  console.log("promise", files);
}

run().catch((err) => {
  console.error(err);
});
