const { EventEmitter } = require("events");

const ee = new EventEmitter();

// In the following example, the 'listener1' function will be called 2 times, but the 'listener2' function will be called 5 times:

const listener1 = () => {
  console.log("listener 1");
};

const listener2 = () => {
  console.log("listener 2");
};

ee.on("my-event", listener1);
ee.on("my-event", listener2);

setInterval(() => {
  ee.emit("my-event");
}, 200);

setTimeout(() => {
  ee.removeListener("my-event", listener1);
}, 500);

setTimeout(() => {
  ee.removeListener("my-event", listener2);
}, 1100);
