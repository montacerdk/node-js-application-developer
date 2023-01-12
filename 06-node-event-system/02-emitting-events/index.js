import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

myEmitter.emit("an-event", some, args);

// 'emit' with inheriting from EventEmitter.
export class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts);

    this.name = opts.name;
  }

  destroy(err) {
    if (err) {
      this.emit("error", err);
    }
    this.emit("close");
  }
}
