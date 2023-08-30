import { it, expect, describe } from "vitest";
import { generateResultText } from "./output";

// here I am not following the AAA pattern, I'm bad!
describe("generateResultText()", () => {
  it("should return string whatever the input is", () => {
    expect(generateResultText("")).toBeTypeOf("string");
    expect(generateResultText(1)).toBeTypeOf("string");
    expect(generateResultText(true)).toBeTypeOf("string");
    expect(generateResultText(null)).toBeTypeOf("string");
  });

  it("should return 'Invalid input. You must enter valid numbers.' if input is 'invalid'", () => {
    expect(generateResultText("invalid")).toBe(
      "Invalid input. You must enter valid numbers."
    );
  });

  it("should return 'Result: ' + calculationResult if input is not 'invalid' and not 'no-calc'", () => {
    expect(generateResultText("")).toBe("Result: ");
    expect(generateResultText(1)).toBe("Result: 1");
    expect(generateResultText(true)).toBe("Result: true");
    expect(generateResultText(null)).toBe("Result: null");
  });

  it("should return '' if input is 'no-calc'", () => {
    expect(generateResultText("no-calc")).toBe("");
  });
});
