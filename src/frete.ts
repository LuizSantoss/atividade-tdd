const LIMITE_FRETE_REDUZIDO = 100;
const LIMITE_FRETE_GRATIS = 200;

const FRETE_PADRAO = 20;
const FRETE_REDUZIDO = 10;
const FRETE_GRATIS = 0;

/**
 * Retorna o custo do frete conforme o valor da compra.
 * - abaixo de 100: R$ 20
 * - de 100 até menos de 200: R$ 10
 * - a partir de 200: grátis
 */
export function calcularFrete(valor: number): number {
  if (valor >= LIMITE_FRETE_GRATIS) {
    return FRETE_GRATIS;
  }
  if (valor >= LIMITE_FRETE_REDUZIDO) {
    return FRETE_REDUZIDO;
  }
  return FRETE_PADRAO;
}