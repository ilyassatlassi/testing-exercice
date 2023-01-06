const stringLength = require('./task1');

describe("stringLength()", () => {
  it("should return the number of characters in a string", () => {
    expect(stringLength("Hello")).toEqual(5);
    expect(stringLength("1234567890")).toEqual(10);
  });

  it("should throw an error if the string is empty", () => {
    expect(() => stringLength("")).toThrow("String must be at least 1 character long.");
  });

  it("should throw an error if the string is longer than 10 characters", () => {
    expect(() => stringLength("012345678901")).toThrow("String must not be longer than 10 characters.");
  });
});
