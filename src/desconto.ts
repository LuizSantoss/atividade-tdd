export function aplicarDesconto(valor: number): number {
  let valorFinal = valor;

  if (valor >= 200) {
    valorFinal = valor * 0.8;
  } else if (valor >= 100) {
    valorFinal = valor * 0.9;
  }

  return Math.round(valorFinal * 100) / 100;
}