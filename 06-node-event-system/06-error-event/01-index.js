const { EventEmitter } = require("events");

const ee = new EventEmitter();

process.stdin.resume(); // Keep process alive.

// This will cause the process to crash and output an error stack trace.
ee.emit("error", new Error("oh oh"));
