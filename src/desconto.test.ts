import { describe, it, expect } from "vitest";
import { aplicarDesconto } from "./desconto";

describe("aplicarDesconto", () => {
  describe("abaixo de R$ 100 (sem desconto)", () => {
    it("mantém R$ 50", () => {
      expect(aplicarDesconto(50)).toBe(50);
    });

    it("mantém R$ 99,99", () => {
      expect(aplicarDesconto(99.99)).toBe(99.99);
    });
  });

  describe("de R$ 100 até menos de R$ 200 (10%)", () => {
    it("aplica 10% em R$ 100", () => {
      expect(aplicarDesconto(100)).toBe(90);
    });

    it("aplica 10% em R$ 150", () => {
      expect(aplicarDesconto(150)).toBe(135);
    });
  });

  describe("a partir de R$ 200 (20%)", () => {
    it("aplica 20% em R$ 200", () => {
      expect(aplicarDesconto(200)).toBe(160);
    });

    it("aplica 20% em R$ 250", () => {
      expect(aplicarDesconto(250)).toBe(200);
    });
  });

  describe("arredondamento para duas casas decimais", () => {
    it("R$ 100,01 vira R$ 90,01", () => {
      expect(aplicarDesconto(100.01)).toBe(90.01);
    });

    it("R$ 133,33 vira R$ 120", () => {
      expect(aplicarDesconto(133.33)).toBe(120);
    });

    it("R$ 249,99 vira R$ 199,99", () => {
      expect(aplicarDesconto(249.99)).toBe(199.99);
    });
  });
});