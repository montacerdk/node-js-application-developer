"use strict";

const upper = (str) => {
  if (typeof str === "symbol") str = str.toString();
  str += "";
  return str.toUpperCase();
};

// Whatever is assigned to 'module.exports' will be the value that is returned when the module is required.

module.exports = { upper: upper };
