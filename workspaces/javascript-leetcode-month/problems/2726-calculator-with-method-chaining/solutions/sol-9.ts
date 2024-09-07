class Calculator {
  constructor(private value: number) {}

  divide(value: number): this {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.value /= value;
    return this;
  }

  getResult(): number {
    return this.value;
  }
}

for (const [name, operator] of Object.entries({
  add: "+",
  subtract: "-",
  multiply: "*",
  power: "**",
})) {
  (Calculator.prototype as unknown as Record<string, unknown>)[name] =
    function (this: Calculator, value: number): Calculator {
      eval(`this.value ${operator}= value`);
      return this;
    };
}
