function doTask(amount) {
  if (typeof amount !== "number") throw new Error("amount must be a number");
  return amount / 2;
}

doTask("66");

// Program will Crush and will throw => Error: amount must be a number
