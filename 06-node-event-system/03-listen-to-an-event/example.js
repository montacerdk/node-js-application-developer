const { EventEmitter } = require("events");

const ee = new EventEmitter();

ee.on("my-event", () => {
  console.log("1st");
});
ee.on("my-event", () => {
  console.log("2nd");
});
ee.emit("my-event");

// The prependListener method can be used to inject listeners into the top position:

// ee.on("my-event-1", () => {
//   console.log("2nd");
// });
// ee.prependListener("my-event-1", () => {
//   console.log("1st");
// });
// ee.emit("my-event-1");
