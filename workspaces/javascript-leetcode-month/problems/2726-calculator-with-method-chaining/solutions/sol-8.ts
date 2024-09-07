declare class Calculator {
  _value: number;
  _updateValue(this: Calculator, value: number): this;
  [key: string]: unknown;
}

function Calculator(this: Calculator, value: number) {
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

Calculator.prototype.getResult = function (this: Calculator): number {
  return this._value;
};
