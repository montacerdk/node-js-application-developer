"use strict";

const {
  join,
  relative,
  resolve,
  normalize,
  parse,
  basename,
  dirname,
  extname,
} = require("path");

// Linux and MacOS paths: /training/ch-13/example.js
// Windows paths: C:\training\ch-13\example.js

// Cross platform Path for 'out.txt' file.
console.log("out file:", join(__dirname, "out.txt"));

// path.join method can accept many arguments:
// path.join('foo', 'bar', 'baz') -> 'foo/bar/baz' or 'foo\bar\baz'

// Path methods :

// Builders :

// relative(); // Given two absolute paths, calculates the relative path between them.
// resolve(); // Returns a string of the path that would result from navigating to each of the directories in order using the command line 'cd'.
// For instance resolve('/foo', 'bar', 'baz') would return '/foo/bar/baz', which is akin to executing cd /foo then cd bar then cd baz on the command line.

// normalize(); // Resolves .. and . dot in paths and strips extra slashes.
// normalize('/foo/../bar//baz') would return '/bar/baz'.

// Deconstructors :

console.log("filename parsed:", parse(__filename));
console.log("filename basename:", basename(__filename));
console.log("filename dirname:", dirname(__filename));
console.log("filename extname:", extname(__filename));
