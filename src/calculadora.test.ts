import { describe, it, expect } from "vitest";
import { somar } from "./calculadora";

describe("somar", () => {
  it("soma 3 e 5 resultando em 8", () => {
    expect(somar(3, 5)).toBe(8);
  });
});