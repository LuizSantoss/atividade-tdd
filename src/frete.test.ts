import { describe, it, expect } from "vitest";
import { calcularFrete } from "./frete";

describe("calcularFrete", () => {
  describe("abaixo de R$ 100", () => {
    it("cobra R$ 20 em compra de R$ 50", () => {
      expect(calcularFrete(50)).toBe(20);
    });

    it("cobra R$ 20 em compra de R$ 99,99", () => {
      expect(calcularFrete(99.99)).toBe(20);
    });
  });

  describe("de R$ 100 até menos de R$ 200", () => {
    it("cobra R$ 10 em compra de R$ 100", () => {
      expect(calcularFrete(100)).toBe(10);
    });

    it("cobra R$ 10 em compra de R$ 199,99", () => {
      expect(calcularFrete(199.99)).toBe(10);
    });
  });

  describe("a partir de R$ 200", () => {
    it("frete grátis em compra de R$ 200", () => {
      expect(calcularFrete(200)).toBe(0);
    });

    it("frete grátis em compra de R$ 250", () => {
      expect(calcularFrete(250)).toBe(0);
    });
  });
});