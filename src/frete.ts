export function calcularFrete(valor: number): number {
  if (valor >= 200) {
    return 0;
  }
  if (valor >= 100) {
    return 10;
  }
  return 20;
}