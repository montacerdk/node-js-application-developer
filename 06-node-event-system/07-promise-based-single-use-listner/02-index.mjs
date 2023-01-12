import { once, EventEmitter } from "events";
import { setTimeout } from "timers/promises";

const uneventful = new EventEmitter();

const ac = new AbortController();

const { signal } = ac;

setTimeout(5000).then(() => ac.abort());

console.log("waiting for ping ...");

try {
  await once(uneventful, "ping", { signal });

  console.log("pinged!");
} catch (err) {
  // Ignore abort errors.
  if (err.code !== "ABORT_ERR") throw err;
  console.log("canceled");
}

// This code will now output canceled every time.
// Since 'uneventful' never emits pinged, after 5000 milliseconds ac.abort is called, and this causes the signal instance passed to events.once to emit an abort event which triggers events.once to reject the returned promise with an AbortError.
// We check for the AbortError, rethrowing if the error isn't related to the AbortController. If the error is an AbortError we log out canceled.
