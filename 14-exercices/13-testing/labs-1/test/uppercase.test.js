const { test } = require("tap");

const uppercase = require("../uppercase");

test("Upper case a string", async ({ equal }) => {
  const upperCased = uppercase("a");

  equal(upperCased, "A");
});
