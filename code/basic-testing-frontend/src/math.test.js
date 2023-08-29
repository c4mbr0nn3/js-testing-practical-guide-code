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
  const numbers = [1, 2, "a"];
  const result = add(numbers);
  expect(result).toBeNaN();
});

it("add should return correct sum if a string array is provided", () => {
  const numbers = ["1", "2"];
  const expected = numbers.reduce((a, b) => +a + +b, 0);
  const result = add(numbers);
  expect(result).toBe(expected);
});

it("add should return 0 if an empty array is provided", () => {
  const numbers = [];
  const expected = 0;
  const result = add(numbers);
  expect(result).toBe(expected);
});

it("add should throw an error if no array is provided", () => {
  const resultFn = () => add();
  expect(resultFn).toThrow();
});

it("add should throw an error if numbers not in an array", () => {
  const resultFn = () => add(1, 2);
  expect(resultFn).toThrow();
});

it("subtract should subtract all number values in an array", () => {
  const numbers = [1, 2]; // keep it simple, just two numbers
  const expected = numbers.reduce((a, b) => a - b, 0);
  const result = subtract(numbers);
  expect(result).toBe(expected);
});
