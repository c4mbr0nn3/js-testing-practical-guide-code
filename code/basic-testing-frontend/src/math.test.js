import { it, expect } from "vitest";
import { add, subtract } from "./math";

it("should sum all number values in an array", () => {
  const result = add([1, 2, 3, 4, 5]);
  expect(result).toBe(15);
});

it("should subtract all number values in an array", () => {
  const result = subtract([1, 2, 3, 4, 5]);
  expect(result).toBe(-15);
});
