// A promise is an object that represents an asynchronous operation.
// Pending or settled (resolved or rejected).

function myAsyncOperation(cb) {
  doSomethingAsynchronous((err, value) => {
    cb(err, value);
  });
}

myAsyncOperation(functionThatHandlesTheResult);

function myAsyncOperation() {
  return new Promise((resolve, reject) => {
    doSomethingAsynchronous((err, value) => {
      if (err) reject(err);
      else resolve(value);
    });
  });
}

const promise = myAsyncOperation();
// next up: do something with promise
