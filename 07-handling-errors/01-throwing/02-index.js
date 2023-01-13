function doTask(amount) {
  if (typeof amount !== "number") throw new Error("amount must be a number");

  // THE FOLLOWING IS NOT RECOMMENDED:
  if (amount <= 0) throw "amount must be greater than zero";
  return amount / 2;
}

doTask(-1);

// By passing -1 to doTask here, it will trigger a throw of a string, instead of an error.
// We will not be able to view error trace.
