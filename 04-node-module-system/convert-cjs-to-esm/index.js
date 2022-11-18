"use strict";

const pino = require("pino");

// Trying to load a ESM file into a CJS file broke our project.
const { upper } = require("./format.mjs");

const logger = pino();

logger.info(upper("my-package started"));

process.stdin.resume();
