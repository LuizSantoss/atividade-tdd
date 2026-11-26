import { describe, it, expect } from "vitest";
import { somar, subtrair, multiplicar} from "./calculadora";

describe("somar", () => {
  it("soma 3 e 5 resultando em 8", () => {
    expect(somar(3, 5)).toBe(8);
  });
});

describe("subtrair", () => {
  it("subtrai 4 de 10 resultando em 6", () => {
    expect(subtrair(10, 4)).toBe(6);
  });
});


describe("multiplicar", () => {
  it("multiplica 4 por 3 resultando em 12", () => {
    expect(multiplicar(4, 3)).toBe(12);
  });
});