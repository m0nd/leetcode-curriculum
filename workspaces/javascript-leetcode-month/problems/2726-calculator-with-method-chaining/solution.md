# 2726. Calculator with Method Chaining

[View this Write-up on LeetCode TODO](https://leetcode.com/problems/calculator-with-method-chaining/solutions/) | [View Problem on LeetCode](https://leetcode.com/problems/calculator-with-method-chaining/)

> \[!WARNING]\
> This page includes spoilers. For a spoiler-free introduction to the problem, see [the README file](README.md).

## Summary

## Background

## Solutions

```javascript []
class Calculator {
  constructor(value) {
    this.value = value;
  }

  add(value) {
    this.value += value;
    return this;
  }

  subtract(value) {
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    this.value /= value;
    return this;
  }

  power(value) {
    this.value **= value;
    return this;
  }

  getResult() {
    return this.value;
  }
}
```

```typescript []
class Calculator {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  add(value: number): this {
    this.value += value;
    return this;
  }

  subtract(value: number): this {
    this.value -= value;
    return this;
  }

  multiply(value: number): this {
    this.value *= value;
    return this;
  }

  divide(value: number): this {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    this.value /= value;
    return this;
  }

  power(value: number): this {
    this.value **= value;
    return this;
  }

  getResult(): number {
    return this.value;
  }
}
```

With more concise field initializer

```typescript []
class Calculator {
  constructor(private value: number) {}

  add(value: number): this {
    this.value += value;
    return this;
  }

  subtract(value: number): this {
    this.value -= value;
    return this;
  }

  multiply(value: number): this {
    this.value *= value;
    return this;
  }

  divide(value: number): this {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    this.value /= value;
    return this;
  }

  power(value: number): this {
    this.value **= value;
    return this;
  }

  getResult(): number {
    return this.value;
  }
}
```

With an `updateValue` helper

```typescript []
class Calculator {
  constructor(private value: number) {}

  private updateValue(newValue: number): this {
    this.value = newValue;
    return this;
  }

  add(value: number): this {
    return this.updateValue(this.value + value);
  }

  subtract(value: number): this {
    return this.updateValue(this.value - value);
  }

  multiply(value: number): this {
    return this.updateValue(this.value * value);
  }

  divide(value: number): this {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    return this.updateValue(this.value / value);
  }

  power(value: number): this {
    return this.updateValue(this.value ** value);
  }

  getResult(): number {
    return this.value;
  }
}
```

Immutable objects:

```typescript []
class Calculator {
  constructor(private readonly value: number) {}

  add(value: number): Calculator {
    return new Calculator(this.value + value);
  }

  subtract(value: number): Calculator {
    return new Calculator(this.value - value);
  }

  multiply(value: number): Calculator {
    return new Calculator(this.value * value);
  }

  divide(value: number): Calculator {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    return new Calculator(this.value / value);
  }

  power(value: number): Calculator {
    return new Calculator(this.value ** value);
  }

  getResult(): number {
    return this.value;
  }
}
```

Old-style

```typescript []
function Calculator(value: number) {
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
```

Old-style with prototype

```typescript []
function Calculator(value: number) {
  this.value = value;
}

Calculator.prototype.add = function (
  this: Calculator,
  value: number,
): Calculator {
  this.value += value;
  return this;
};

Calculator.prototype.subtract = function (
  this: Calculator,
  value: number,
): Calculator {
  this.value -= value;
  return this;
};

Calculator.prototype.multiply = function (
  this: Calculator,
  value: number,
): Calculator {
  this.value *= value;
  return this;
};

Calculator.prototype.divide = function (
  this: Calculator,
  value: number,
): Calculator {
  if (value === 0) {
    throw new Error("Division by zero is not allowed");
  }

  this.value /= value;
  return this;
};

Calculator.prototype.power = function (
  this: Calculator,
  value: number,
): Calculator {
  this.value **= value;
  return this;
};

Calculator.prototype.getResult = function (): number {
  return this.value;
};
```

With private value and \_updateValue helper

```typescript []
function Calculator(value: number) {
  this._value = value;
}

Calculator.prototype._updateValue = function (
  this: Calculator,
  newValue: number,
): Calculator {
  this._value = newValue;
  return this;
};

Calculator.prototype.add = function (
  this: Calculator,
  value: number,
): Calculator {
  return this._updateValue(this._value + value);
};

Calculator.prototype.subtract = function (
  this: Calculator,
  value: number,
): Calculator {
  return this._updateValue(this._value - value);
};

Calculator.prototype.multiply = function (
  this: Calculator,
  value: number,
): Calculator {
  return this._updateValue(this._value * value);
};

Calculator.prototype.divide = function (
  this: Calculator,
  value: number,
): Calculator {
  if (value === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return this._updateValue(this._value / value);
};

Calculator.prototype.power = function (
  this: Calculator,
  value: number,
): Calculator {
  return this._updateValue(this._value ** value);
};

Calculator.prototype.getResult = function (): number {
  return this.value;
};
```

```typescript []
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
  Calculator.prototype[name] = function (
    this: Calculator,
    value: number,
  ): Calculator {
    eval(`this.value ${operator}= value`);
    return this;
  };
}
```

```typescript []
class Calculator {
  constructor(private value: number) {}

  getResult(): number {
    return this.value;
  }
}

const VALIDATIONS = {
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
  Calculator.prototype[name] = function (
    this: Calculator,
    value: number,
  ): Calculator {
    VALIDATIONS[name]?.(value);
    eval(`this.value ${operator}= value`);
    return this;
  };
}
```

```typescript []
class Calculator {
  constructor(private value: number) {}

  getResult(): number {
    return this.value;
  }
}

const VALIDATIONS = {
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
  Calculator.prototype[name] = eval(`
    (function ${name}(value) {
      VALIDATIONS[${JSON.stringify(name)}]?.(value);
      this.value ${operator}= value;
      return this;
    })
  `);
}
```

## Answers to Bonus Questions

> \[!TIP]\
> Thanks for reading! If you enjoyed this write-up, feel free to [up-vote it on LeetCode TODO](https://leetcode.com/problems/calculator-with-method-chaining/solutions/)! 🙏
