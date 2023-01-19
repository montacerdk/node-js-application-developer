import { Buffer } from "buffer";

const buffer = Buffer.from("👀");

console.log(buffer); // prints <Buffer f0 9f 91 80>
console.log(buffer.toString()); // prints 👀
console.log(buffer.toString("base64")); // prints 👀
console.log(buffer + ""); // prints 👀
