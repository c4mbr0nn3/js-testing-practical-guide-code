import { it, describe, expect, vi } from "vitest";
import { sendDataRequest } from "../util/http";

const responseData = { testKey: "testValue" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      reject(new Error("No stringified body provided!"));
    }
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

  it("should convert the provided data to JSON before sending it", async () => {
    const testData = { key: "data" };
    let errorMessage;

    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error.message;
    }

    expect(errorMessage).not.toBe("No stringified body provided!");
  });
});
