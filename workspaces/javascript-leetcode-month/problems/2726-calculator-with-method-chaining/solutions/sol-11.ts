class Calculator {
  constructor(private value: number) {}

  getResult(): number {
    return this.value;
  }
}

const VALIDATIONS: Record<string, ((value: number) => void) | undefined> = {
  divide(value: number) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
  },
};

for (const [name, operator] of Object.entries({
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
  power: "**",
})) {
  (Calculator.prototype as unknown as Record<string, unknown>)[name] = eval(`
    (function ${name}(value) {
      VALIDATIONS[${JSON.stringify(name)}]?.(value);
      this.value ${operator}= value;
      return this;
    })
  `);
}
