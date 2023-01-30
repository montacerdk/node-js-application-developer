// In the labs-1 folder there is a file called will-throw.js. Run the file without any flags, and then run the file with --stack-trace-limit set to 200.

function f(n = 99) {
  if (n === 0) throw Error();
  f(n - 1);
}

f();

// In the first case, there should only be ten stack frames in the error output.
// node 01-index.js

// In the second case, there should be more than ten frames in the error in output.
// node --stack-trace-limit=200 01-index.js
