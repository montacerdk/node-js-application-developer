import { once, EventEmitter } from "events";

const uneventful = new EventEmitter();

console.log("waiting for ping ...");

process.stdin.resume(); // Keep process alive.

// Execution will pause on the line starting await once, until the registered event fires.
await once(uneventful, "ping");

console.log("pinged!");

// We need an escape for scenarios where an event might not fire.
