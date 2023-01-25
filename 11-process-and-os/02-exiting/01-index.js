"use strict";

// Some API's have active handles. An active handle is a reference that keeps the process open.
// net.createServer creates a server with an active handle which will stop the process from exiting byy itself.

setInterval(() => {
  console.log("this interval is keeping the process open");
}, 500);

// This will continue to print every 500ms, we can use Ctrl and C to exit.
