import { it, describe, expect } from "vitest";

import { validateNotEmpty } from "../util/validation";
import { ValidationError } from "../util/errors";

describe("validateNotEmpty", () => {
  it("should not throw an error for non-empty strings", () => {
    const validString = "This is a valid string";
    expect(() =>
      validateNotEmpty(validString, "Should not throw")
    ).not.toThrow();
  });

  it("should throw a ValidationError for empty strings", () => {
    const emptyString = "";
    expect(() => validateNotEmpty(emptyString, "String is empty")).toThrow(
      ValidationError
    );
  });

  it("should throw a ValidationError for strings with only whitespace", () => {
    const whitespaceString = "   ";
    expect(() =>
      validateNotEmpty(whitespaceString, "String is only whitespace")
    ).toThrow(ValidationError);
  });

  it("should throw a ValidationError for null values", () => {
    expect(() => validateNotEmpty(null, "Value is null")).toThrow(
      ValidationError
    );
  });

  it("should throw a ValidationError for undefined values", () => {
    expect(() => validateNotEmpty(undefined, "Value is undefined")).toThrow(
      ValidationError
    );
  });

  it("should display the provided error message", () => {
    const customMessage = "Custom Error Message";
    try {
      validateNotEmpty("", customMessage);
    } catch (error) {
      expect(error.message).toBe(customMessage);
    }
  });
});
