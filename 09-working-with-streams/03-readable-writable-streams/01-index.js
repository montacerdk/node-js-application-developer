"use strict";

const net = require("net");
const { finished } = require("stream");

// TCP network socket is a great example of a Duplex stream.

// 'socket' is the Duplex stream instance.

net
  .createServer((socket) => {
    // The writable side of the stream.
    const interval = setInterval(() => {
      socket.write("beat");
    }, 1000);

    // The readable side of the stream.
    socket.on("data", (data) => {
      socket.write(data.toString().toUpperCase());
    });

    // The readable side of the stream.
    socket.on("end", () => {
      clearInterval(interval);
    });

    finished(socket, (err) => {
      if (err) {
        console.error("there was a socket error", err);
      }
      clearInterval(interval);
    });
  })
  .listen(3001);
