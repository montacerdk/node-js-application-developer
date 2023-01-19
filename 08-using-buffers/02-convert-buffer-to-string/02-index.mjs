import { StringDecoder } from "string_decoder";
import { Buffer } from "buffer";

// The UTF8 encoding format has between 1 and 4 bytes to represent each character,
// if for any reason one or more bytes is truncated from a character this will result in encoding errors.
// So in situations where we have multiple buffers that might split characters across a byte boundary the Node core 'string_decoder' module should be used.

const frag1 = Buffer.from("f09f", "hex");
const frag2 = Buffer.from("9180", "hex");

console.log(frag1.toString()); // prints �
console.log(frag2.toString()); // prints ��

// The 'string_decoder' module provides an API for decoding Buffer objects into strings in a manner that preserves encoded multi-byte UTF-8 and UTF-16 characters.

const decoder = new StringDecoder();

console.log(decoder.write(frag1)); // prints nothing
console.log(decoder.write(frag2)); // prints 👀
