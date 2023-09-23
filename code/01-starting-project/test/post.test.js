import { describe, it, expect, beforeEach } from "vitest";
import { extractPostData } from "../posts/posts";

const testTitle = "Test Title";
const testContent = "Test Content";
let testFormData;

describe("extractPostData", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };
  });

  it("should extract title and content from the provided form data", () => {
    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
