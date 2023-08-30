import { test, expect } from "vitest";
import { transformToNumber } from "./numbers";

test("transformToNumber should return a number", () => {
  const result = transformToNumber("1");
  expect(result).toBe(1);
});

test("transformToNumber should return NaN if value is not a number", () => {
  const result = transformToNumber("a");
  expect(result).toBeNaN();
});

test("transformToNumber should return NaN if value is undefined", () => {
  const result = transformToNumber();
  expect(result).toBeNaN();
});

test("transformToNumber should return 0 if value is null", () => {
  const result = transformToNumber(null);
  expect(result).toBe(0);
});
