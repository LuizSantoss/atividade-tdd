import { describe, it, expect } from "vitest";
import { somar, subtrair, multiplicar, dividir } from "./calculadora";

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

describe("dividir", () => {
  it("divide 10 por 2 resultando em 5", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it("lança erro ao dividir por zero", () => {
    expect(() => dividir(10, 0)).toThrow("Divisão por zero");
  });
});