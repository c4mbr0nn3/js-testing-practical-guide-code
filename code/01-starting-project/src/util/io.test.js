import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs");

it("should execute the writeFile method", () => {
  const testData = "test";
  const testFilename = "test.txt";
  // the side effect is the fact that the file need to be written to the disk to pass the test
  //return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

  writeData(testData, testFilename);
  expect(fs.writeFile).toHaveBeenCalled();
});
