const { EventEmitter } = require("events");

const ee = new EventEmitter();

// Will console.log my-event fired 3 times.
ee.on("my-event", () => {
  console.log("my-event fired");
});

// An event can also be emitted more than once:

ee.emit("my-event");
ee.emit("my-event");
ee.emit("my-event");

// The once method will immediately remove its listener after it has been called:

// Will console.log my-event-1 fired 1 time.
ee.once("my-event-1", () => {
  console.log("my-event-1 fired");
});

ee.emit("my-event-1");
ee.emit("my-event-1");
ee.emit("my-event-1");
