"use strict";

const pino = require("pino");

const logger = pino();

logger.info("my-package started");

process.stdin.resume();
