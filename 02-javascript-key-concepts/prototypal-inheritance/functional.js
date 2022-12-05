const wolf = {
  howl: function () {
    console.log(this.name + ": Awoooooooo");
  },
};

const dog = Object.create(wolf, {
  woof: {
    value: function () {
      console.log(this.name + ": Woof Woof");
    },
  },
});

const dan = Object.create(dog, {
  name: { value: "Dan the dog" },
});

dan.woof(); // prints "Dan the dog: woof"
dan.howl(); // prints "Dan the dog: awoooooooo"

console.log(Object.getPrototypeOf(wolf) === Object.prototype); // true
console.log(Object.getPrototypeOf(dan) === dog); // true
console.log(Object.getPrototypeOf(dog) === wolf); // true

// The wolf object is a plain JavaScript object, created with the object literal syntax.
// The prototype of plain JavaScript objects is 'Object.prototype'.

// The Object.create function can take two arguments.
// The first argument is the desired prototype of the object being created

/**
  To describe the full prototype chain:
    - The prototype of dan is dog.
    - The prototype of dog is wolf.
    - The prototype of wolf is Object.prototype.
 */

// The second argument of Object.create is an optional Properties Descriptor object.
