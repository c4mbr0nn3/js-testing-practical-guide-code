import { it, describe, expect, vi } from "vitest";
import { sendDataRequest } from "../util/http";

const responseData = { testKey: "testValue" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const response = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(responseData);
        });
      },
    };
    resolve(response);
  });
});
vi.stubGlobal("fetch", testFetch);

describe("http utils", () => {
  it("should return any available response data", () => {
    const testData = { key: "data" };
    return expect(sendDataRequest(testData)).resolves.toEqual(responseData);
  });
});
