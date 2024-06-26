/**
 * @adventure
 * {"name": "Iterator.prototype.max"}
 */

import "./comparatorNatural";
import "./iteratorPrototypeToIterable";

import { iteratorPrototype } from "./iteratorPrototype";

declare global {
  interface Iterator<T> {
    max(
      compareFn?: (a: T, b: T) => number,
      options?: { nanBehavior?: "avoid" | "compare" },
    ): T | undefined;
  }
}

iteratorPrototype.max = function <T>(
  this: Iterator<T>,
  compareFn: (a: T, b: T) => number = Comparator.natural,
  { nanBehavior = "avoid" }: { nanBehavior?: "avoid" | "compare" } = {},
): T | undefined {
  let res: T | undefined = undefined;
  let isFirst = true;
  for (const element of this.toIterable()) {
    if (
      isFirst ||
      compareFn(element, res as T) > 0 ||
      (nanBehavior === "avoid" && Number.isNaN(res) && !Number.isNaN(element))
    ) {
      res = element;
      isFirst = false;
    }
  }
  return res;
};
