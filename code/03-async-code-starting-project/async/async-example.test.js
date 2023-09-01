import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token", (done) => {
  const mail = "example@email.com";
  const doneFn = (err, token) => {
    expect(err).toBeNull();
    try {
      expect(token).toBeDefined();
      //expect(token).toBe(2);
      done();
    } catch (error) {
      done(error);
    }
  };
  generateToken(mail, doneFn);
});

it("should generate a token", () => {
  const mail = "example@email.com";

  return expect(generateTokenPromise(mail)).resolves.toBeDefined();
});

it("should generate a token - async", async () => {
  const mail = "example@email.com";
  const token = await generateTokenPromise(mail);
  expect(token).toBeDefined();
});
