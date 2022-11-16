class Wolf {
  constructor(name) {
    this.name = name;
  }

  howl() {
    console.log(this.name + ": awoooooooo");
  }
}

class Dog extends Wolf {
  constructor(name) {
    super(name + " the dog");
  }

  woof() {
    console.log(this.name + ": woof");
  }
}

const dan = new Dog("Dan");

dan.woof(); // prints "Dan the dog: woof"
dan.howl(); // prints "Dan the dog: awoooooooo"

console.log(Object.getPrototypeOf(dan) === Dog.prototype); // true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); // true
