const reverseString = require('./task2');


describe("reverseString()", () => {
    it("should return the reversed version of a string", () => {
      expect(reverseString("hello")).toEqual("olleh");
      expect(reverseString("1234567890")).toEqual("0987654321");
      expect(reverseString("")).toEqual("");
    });
  });
  