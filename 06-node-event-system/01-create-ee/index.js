import { EventEmitter } from "events";

// Create EE Instance.
export const myEmitter = new EventEmitter();

// Inheritance.
export class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts);

    this.name = opts.name;
  }
}
