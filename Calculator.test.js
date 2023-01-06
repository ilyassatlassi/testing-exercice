const Calculator = require('./task3');


describe("Calculator", () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe("add()", () => {
      it("should add two numbers", () => {
        expect(calculator.add(1, 2)).toEqual(3);
        expect(calculator.add(-1, 2)).toEqual(1);
        expect(calculator.add(0, 0)).toEqual(0);
      });
    });
  
    describe("subtract()", () => {
      it("should subtract two numbers", () => {
        expect(calculator.subtract(1, 2)).toEqual(-1);
        expect(calculator.subtract(-1, 2)).toEqual(-3);
        expect(calculator.subtract(0, 0)).toEqual(0);
      });
    });
  
    describe("divide()", () => {
      it("should divide two numbers", () => {
        expect(calculator.divide(4, 2)).toEqual(2);
        expect(calculator.divide(-4, 2)).toEqual(-2);
        expect(calculator.divide(0, 1)).toEqual(0);
      });
  
      it("should throw an error if attempting to divide by 0", () => {
        expect(() => calculator.divide(4, 0)).toThrow("Cannot divide by 0.");
      });
    });
  
    describe("multiply()", () => {
      it("should multiply two numbers", () => {
        expect(calculator.multiply(2, 3)).toEqual(6);
        expect(calculator.multiply(-2, 3)).toEqual(-6);
        expect(calculator.multiply(0, 1)).toEqual(0);
      });
    });
  });
  