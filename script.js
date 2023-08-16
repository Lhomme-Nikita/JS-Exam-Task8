function Calculator() {
  this.sum = function(a, b) {
    return a + b;
  };

  this.subtraction = function(a, b) {
    return a - b;
  };

  this.multiplication = function(a, b) {
    return a * b;
  };

  this.division = function(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Cannot divide by zero, please enter valid number");
    }
  };
}

const calculator = new Calculator();



console.log(calculator.sum(17, 76))
console.log(calculator.subtraction(76, 17));
console.log(calculator.multiplication(17, 1));
console.log(calculator.division(17, 0));