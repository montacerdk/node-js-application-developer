const { EventEmitter } = require("events");

const ee = new EventEmitter();

ee.on("close", () => {
  console.log("close event fired!");
});

// Equivalent to :

ee.addListener("close", () => {
  console.log("close event fired!");
});

ee.emit("close");

// Arguments passed to emit are received by the listener function:

ee.on("add", (a, b) => {
  console.log(a + b);
});

// logs 13
ee.emit("add", 7, 6);

// Ordering is important, in the following example the event listener will not fire:
ee.emit("close");

ee.on("close", () => {
  console.log("close event fired!");
});
