// Creating an object with a specific prototype object can also be achieved by calling a function with the new keyword.

function inherit(proto) {
  function ChainLink() {}

  ChainLink.prototype = proto;

  return new ChainLink();
}

function Wolf(name) {
  this.name = name;
}

Wolf.prototype.howl = function () {
  console.log(this.name + ": awoooooooo");
};

function Dog(name) {
  Wolf.call(this, name + " the dog");
}

Dog.prototype = inherit(Wolf.prototype);

Dog.prototype.woof = function () {
  console.log(this.name + ": woof");
};

const dan = new Dog("Dan");

dan.woof(); // prints "Dan the dog: woof"
dan.howl(); // prints "Dan the dog: awoooooooo"

console.log(Object.getPrototypeOf(dan) === Dog.prototype); // true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); // true
