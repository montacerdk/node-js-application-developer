// A function can be returned from a function.

function factory() {
  return function doSomething() {};
}

// A function can be passed to another function as an argument.

setTimeout(function () {
  console.log("hello from the future");
}, 100);

// A function can be assigned to an object.

const obj = {
  id: 999,
  fn: function () {
    console.log(this.id);
  },
};

obj.fn(); // Prints 999.

// 'this' refers to the object on which the function was called.

const obj1 = {
  id: 999,
  fn: function () {
    console.log(this.id);
  },
};
const obj2 = { id: 2, fn: obj1.fn };

obj2.fn(); // Prints 2.
obj1.fn(); // Prints 999.

// Functions have a 'call' method that can be used to set their this context.
// In this case the fn function wasn't assigned to any of the objects, this was set dynamically via the 'call' function.

function fn() {
  console.log(this.id);
}

const obj3 = { id: 999 };
const obj4 = { id: 2 };

fn.call(obj4); // Prints 2.
fn.call(obj3); // Prints 999.
fn.call({ id: ":)" }); // Prints :).

// There are also fat arrow functions, also known as lambda functions.

const add = (a, b) => a + b;
const cube = (n) => {
  return Math.pow(n, 3);
};

// Lambda functions do not have their own this context, when this is referenced inside a function, it refers to the this of the nearest parent non-lambda function.

function func() {
  return (offset) => {
    console.log(this.id + offset);
  };
}

const obj5 = { id: 999 };
const offSetter = func.call(obj5);

offSetter(1); // Prints 1000 (999 + 1).

// While normal functions have a prototype property, arrow functions do not.

function normalFunction() {}
const arrowFunction = () => {};

console.log(typeof normalFunction.prototype); // prints 'object'
console.log(typeof arrowFunction.prototype); // prints 'undefined'
