// If a listener is registered for the error event the process will no longer crash.

const { EventEmitter } = require("events");
const ee = new EventEmitter();

process.stdin.resume(); // Keep process alive.

ee.on("error", (err) => {
  console.log("got error:", err.message);
});

ee.emit("error", new Error("oh oh"));
