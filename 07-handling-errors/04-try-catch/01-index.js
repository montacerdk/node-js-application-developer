function doTask(num) {
  console.log(num);
}

try {
  const result = doTask(3);
  console.log("result", result);
} catch (err) {
  if (err instanceof TypeError) {
    console.error("wrong type");
  } else if (err.code === "ERROR_AMOUNT_MUST_EXCEED_ZERO") {
    console.error("out of range");
  } else if (err.code === "ERROR_MUST_BE_EVEN") {
    console.error("cannot be odd");
  } else {
    console.error("Unknown error", err);
  }
}
