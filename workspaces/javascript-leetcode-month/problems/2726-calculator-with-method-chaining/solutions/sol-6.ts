declare class Calculator {
  [key: string]: unknown;
}

function Calculator(this: Calculator, value: number) {
  let result = value;

  this.add = function (this: Calculator, value: number): Calculator {
    result += value;
    return this;
  };

  this.subtract = function (this: Calculator, value: number): Calculator {
    result -= value;
    return this;
  };

  this.multiply = function (this: Calculator, value: number): Calculator {
    result *= value;
    return this;
  };

  this.divide = function (this: Calculator, value: number): Calculator {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    result /= value;
    return this;
  };

  this.power = function (this: Calculator, value: number): Calculator {
    result **= value;
    return this;
  };

  this.getResult = function (this: Calculator): number {
    return result;
  };
}
