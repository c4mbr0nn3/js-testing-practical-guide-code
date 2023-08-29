import { it, expect } from "vitest";
import { add, subtract } from "./math";

it("should sum all number values in an array", () => {
  // Arrange
  const numbers = [1, 2]; // keep it simple, just two numbers
  const expected = numbers.reduce((a, b) => a + b, 0);
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expected);
});

it("should subtract all number values in an array", () => {
  // Arrange
  const numbers = [1, 2]; // keep it simple, just two numbers
  const expected = numbers.reduce((a, b) => a - b, 0);
  // Act
  const result = subtract(numbers);
  // Assert
  expect(result).toBe(expected);
});
