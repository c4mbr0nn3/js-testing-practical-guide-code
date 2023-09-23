import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "../util/errors";

describe("HttpError", () => {
  it("should correctly assign properties", () => {
    const error = new HttpError(404, "Not Found", {
      detail: "Resource not found",
    });

    expect(error.statusCode).toBe(404);
    expect(error.message).toBe("Not Found");
    expect(error.data).toEqual({ detail: "Resource not found" });
  });

  it("should contain undefined data if no data is provided as parameter", () => {
    const error = new HttpError(404, "Not Found");

    expect(error.data).toBeUndefined();
  });
});

describe("ValidationError", () => {
  it("should correctly assign message property", () => {
    const error = new ValidationError("Validation failed");

    expect(error.message).toBe("Validation failed");
  });
});
