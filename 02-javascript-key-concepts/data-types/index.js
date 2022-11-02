const number1 = Number(66);
const number2 = 66;

const string1 = String("Hello");
const string2 = "Hello";

const symbol1 = Symbol();
const symbol2 = Symbol("Hello");

const sym1 = Symbol("Sym1");
const sym2 = Symbol("Sym2");

console.log("sym1 === sym2", sym1 === sym2); // false.

const sym1For = Symbol.for("SymFor");
const sym2For = Symbol.for("SymFor");

console.log("sym1For === sym2For", sym1For === sym2For); // true.

// const RED = "red";
// const BLUE = "blue";
// const ORANGE = "orange";
// const YELLOW = "yellow";
const blaBla = "blue";

const RED = Symbol("red");
const BLUE = Symbol("blue");
const ORANGE = Symbol("orange");
const YELLOW = Symbol("yellow");

const getLevelFromColor = (color) => {
  switch (color) {
    case RED:
      return "severe";
    case ORANGE:
      return "high";
    case BLUE:
      return "low";
    case YELLOW:
      return "elevated";
    default:
      return "Unkown color.";
  }
};

console.log("getLevelFromColor", getLevelFromColor(BLUE));
console.log("getLevelFromColor", getLevelFromColor(blaBla));
