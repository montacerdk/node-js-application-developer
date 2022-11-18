"use strict";

console.log("require.main =========> ", require.main);

if (require.main === module) {
  // Load this file as a module.
  const pino = require("pino");

  const logger = pino();

  import("./format.mjs")
    .then((format) => {
      logger.info(format.upper("my-package started"));
      process.stdin.resume();
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
} else {
  // Load this file as a script.
  // node -e "require(' ./index') ('hello").then(console.log)"
  let format = null;

  const reverseAndUpper = async (str) => {
    format = format || (await import("./format.mjs"));
    return format.upper(str).split("").reverse().join("");
  };

  module.exports = reverseAndUpper;
}
