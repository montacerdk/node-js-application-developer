"use strict";
const net = require("net");

const socket = net.connect(3003);

// socket.on("data", (data) => {
//   console.log("got data:", data.toString());
// });

// socket.write("hello");

// setTimeout(() => {
//   socket.write("all done");

//   setTimeout(() => {
//     socket.end();
//   }, 250);
// }, 3250);

// 'process.stdout' is a Writable stream.
// The pipe method exists on Readable streams.
socket.pipe(process.stdout);

socket.write("hello");

setTimeout(() => {
  socket.write("all done");

  setTimeout(() => {
    socket.end();
  }, 250);
}, 3250);
