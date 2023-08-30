import { test, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  test("should throw an error if the input is empty", () => {
    expect(() => validateStringNotEmpty("")).toThrow(
      "Invalid input - must not be empty."
    );
  });

  test("should throw an error if the input only contains spaces", () => {
    expect(() => validateStringNotEmpty("   ")).toThrow(
      "Invalid input - must not be empty."
    );
  });

  test("should throw an error if the input is not a string", () => {
    expect(() => validateStringNotEmpty(1)).toThrow();
  });

  test("should not throw an error if the input is not empty", () => {
    expect(() => validateStringNotEmpty("a")).not.toThrow();
  });
});

describe("validateNumber()", () => {
  test("should throw an error if the input is not a number", () => {
    expect(() => validateNumber("a")).toThrow("Invalid number input.");
    expect(() => validateNumber("1")).toThrow("Invalid number input.");
  });

  test("should not throw an error if the input is a number", () => {
    expect(() => validateNumber(1)).not.toThrow();
  });
});
