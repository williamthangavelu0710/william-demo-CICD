const { createMessage } = require("../src/app");

describe("Integration test", () => {
  test("greet and add work together", () => {
    expect(createMessage("Karthik", 2, 3))
      .toBe("Hello, Karthik! The total is 5.");
  });
});
