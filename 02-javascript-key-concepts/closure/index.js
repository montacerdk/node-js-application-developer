/**
 * When a function is inside another function, it can access both its own closure scope, and the parent closure scope of the outer function.
 *
 * Also valid for arrow functions.
 */
function outerFunction() {
  let foo = true;

  function print() {
    console.log(foo);
  }

  print(); // prints true

  foo = false;

  print(); // prints false
}

outerFunction();

/**
 * In this case the 'foo' parameter of print overrides the 'foo' variable in the outerFn function.
 */
function outerFunc() {
  let foo = true;

  function print(foo) {
    console.log(foo);
  }

  print(1); // prints 1

  foo = false;

  print(2); // prints 2
}

outerFunc();

/**
 * Closure scope cannot be accessed outside of a function.
 */
function outerFn() {
  let foo = true;
}

outerFn();
console.log(foo); // Will throw a ReferenceError

/**
 * Since the invisible closure scope object cannot be accessed outside of a function,
 * if a function returns a function,
 * the returned function can provide controlled access to the parent closure scope.
 */
function init(type) {
  let id = 0;

  return (name) => {
    id += 1;

    return { id: id, type: type, name: name };
  };
}

const createUser = init("user");
const createBook = init("book");

const dave = createUser("Dave");
const annie = createUser("Annie");
const ncb = createBook("Node Cookbook");

console.log(dave); // prints { id: 1, type: 'user', name: 'Dave' }
console.log(annie); // prints { id: 2, type: 'user', name: 'Annie' }
console.log(ncb); // prints { id: 1, type: 'book', name: 'Node Cookbook' }
