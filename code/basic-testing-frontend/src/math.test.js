import { it, expect } from "vitest";
import { add, subtract } from "./math";

it("add should sum all number values in an array", () => {
  // Arrange
  const numbers = [1, 2]; // keep it simple, just two numbers
  const expected = numbers.reduce((a, b) => a + b, 0);
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expected);
});

it("add should return NaN if any value is not a number", () => {
  // Arrange
  const numbers = [1, 2, "a"];
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBeNaN();
});

it("add should return correct sum if a string array is provided", () => {
  // Arrange
  const numbers = ["1", "2"];
  const expected = numbers.reduce((a, b) => +a + +b, 0);
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expected);
});

it("subtract should subtract all number values in an array", () => {
  // Arrange
  const numbers = [1, 2]; // keep it simple, just two numbers
  const expected = numbers.reduce((a, b) => a - b, 0);
  // Act
  const result = subtract(numbers);
  // Assert
  expect(result).toBe(expected);
});
