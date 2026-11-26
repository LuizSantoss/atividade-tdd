const MENSAGEM_DIVISAO_POR_ZERO = "Divisão por zero";

/** Retorna a soma de dois números. */
export function somar(a: number, b: number): number {
  return a + b;
}

/** Retorna a diferença entre dois números (a - b). */
export function subtrair(a: number, b: number): number {
  return a - b;
}

/** Retorna o produto de dois números. */
export function multiplicar(a: number, b: number): number {
  return a * b;
}

/**
 * Retorna o quociente de a por b.
 * @throws Error com a mensagem "Divisão por zero" quando b for 0.
 */
export function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error(MENSAGEM_DIVISAO_POR_ZERO);
  }
  return a / b;
}