import { realpath } from "fs/promises";
import { fileURLToPath } from "url";
import * as format from "./format.js";

const firstArgv = process.argv[1];
console.log("🚀 ~ file: index.js ~ line 6 ~ firstArgv", firstArgv);

// Top level await are permitted in ESM since ESM Modules load asynchronously.
const argv = await realpath(firstArgv);
console.log("🚀 ~ file: index.js ~ line 10 ~ argv", argv);

const metaUrl = await realpath(fileURLToPath(import.meta.url));
console.log("🚀 ~ file: index.js ~ line 12 ~ metaUrl", metaUrl);

const isMain = firstArgv && metaUrl === argv;

if (isMain) {
  const { default: pino } = await import("pino");
  const logger = pino();
  logger.info(format.upper("my-package started"));
  process.stdin.resume();
}

// The export keyword only works at the top level.

// In CJS, we assigned a function to module.exports.
// In ESM we use the export default keyword and follow with a function expression to set a function as the main export.
export default (str) => {
  return format.upper(str).split("").reverse().join("");
};

// node -e "require('./index')('hello').then(console.log)"
// Error [ERR_REQUIRE_ESM]: require() of ES Module.
