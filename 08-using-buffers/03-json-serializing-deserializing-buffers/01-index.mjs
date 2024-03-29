import { Buffer } from "buffer";

const buffer = Buffer.from("👀");

const json = JSON.stringify(buffer);
const parsed = JSON.parse(json);

console.log(json); // prints {"type":"Buffer","data":[240,159,145,128]}
console.log(parsed); // prints { type: 'Buffer', data: [ 240, 159, 145, 128 ] }
console.log(Buffer.from(parsed.data)); // prints <Buffer f0 9f 91 80>
console.log(buffer.toString()); // 👀
