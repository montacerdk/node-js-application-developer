// "use strict";

// const print = (contents) => console.log(contents);

// const opA = (cb) => {
//   setTimeout(() => {
//     cb("A");
//   }, 500);
// };

// const opB = (cb) => {
//   setTimeout(() => {
//     cb("B");
//   }, 250);
// };

// const opC = (cb) => {
//   setTimeout(() => {
//     cb("C");
//   }, 125);
// };

// const opD = (cb) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       cb("D");
//       resolve();
//     }, 750);
//   });
// };

// const printDPromise = () =>
//   new Promise((resolve) => {
//     resolve(opD(print));
//   });
// const printAPromise = () =>
//   new Promise((resolve) => {
//     resolve(opA(print));
//   });
// const printBPromise = () =>
//   new Promise((resolve) => {
//     resolve(opB(print));
//   });
// const printCPromise = () =>
//   new Promise((resolve) => {
//     resolve(opC(print));
//   });

// // const printAPromise = promisify(() => opA(print));
// // const printBPromise = promisify(() => opB(print));
// // const printCPromise = promisify(() => opC(print));

// async function printer() {
//   await printDPromise();
//   await printAPromise();
//   await printBPromise();
//   await printCPromise();
// }

// printer();

// // (async function () {
// //   await printAPromise();
// //   await printBPromise();
// //   await printCPromise();
// // })();

// // printAPromise().then(() => printBPromise().then(() => printCPromise()));

// // (async function () {
// //   await printAPromise();
// //   await printBPromise();
// //   await printCPromise();
// // })();

// // Call the functions in such a way that A then B then C is printed out.
// // Remember promisify can be used to convert a callback API to a promise-based API.
// // The promisify function is included at the top of serial.js in case a promise based solution is preferred.
"use strict";

const { promisify } = require("util");

const timeout = promisify(setTimeout);

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, "A");
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, "B");
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, "C");
  }, 125);
};

(async function () {
  opA(print);
  await timeout(600);
  opB(print);
  await timeout(600);
  opC(print);
})();
