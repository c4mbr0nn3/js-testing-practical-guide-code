import { test, expect } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

test("validateStringNotEmpty should throw an error if the input is empty", () => {
  expect(() => validateStringNotEmpty("")).toThrow(
    "Invalid input - must not be empty."
  );
});

test("validateStringNotEmpty should throw an error if the input only contains spaces", () => {
  expect(() => validateStringNotEmpty("   ")).toThrow(
    "Invalid input - must not be empty."
  );
});

test("validateStringNotEmpty should throw an error if the input is not a string", () => {
  expect(() => validateStringNotEmpty(1)).toThrow();
});

test("validateStringNotEmpty should not throw an error if the input is not empty", () => {
  expect(() => validateStringNotEmpty("a")).not.toThrow();
});

test("validateNumber should throw an error if the input is not a number", () => {
  expect(() => validateNumber("a")).toThrow("Invalid number input.");
  expect(() => validateNumber("1")).toThrow("Invalid number input.");
});

test("validateNumber should not throw an error if the input is a number", () => {
  expect(() => validateNumber(1)).not.toThrow();
});
