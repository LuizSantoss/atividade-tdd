# Prática de TDD — TypeScript + Vitest


Atividade prática de Desenvolvimento Orientado a Testes (TDD) com o ciclo
Red → Green → Refactor. O repositório reúne três desafios:

| Desafio | Implementação | Testes |
|---|---|---|
| 01 — Calculadora de operações | `src/calculadora.ts` | `src/calculadora.test.ts` |
| 02 — Sistema de descontos | `src/desconto.ts` | `src/desconto.test.ts` |
| 03 — Cálculo de frete | `src/frete.ts` | `src/frete.test.ts` |

### Regras implementadas

- **Calculadora:** soma, subtração, multiplicação e divisão. A divisão por zero lança um erro com a mensagem `Divisão por zero`.
- **Descontos:** abaixo de R$ 100 não há desconto; de R$ 100 até menos de R$ 200, 10%; a partir de R$ 200, 20%. O resultado é arredondado para duas casas decimais.
- **Frete:** abaixo de R$ 100, R$ 20; de R$ 100 até menos de R$ 200, R$ 10; a partir de R$ 200, grátis.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (já incluso no Node.js)
- Git


## Executando os testes

```bash
# executa todos os testes uma vez
npm test

# modo observação (reexecuta a cada alteração)
npm run test:watch
```

## Evidências do ciclo TDD

O histórico de commits mostra cada ciclo, identificado nas mensagens:

- `[RED]` — teste escrito e falhando
- `[GREEN]` — implementação mínima para passar
- `refactor(...)` — melhoria do código mantendo os testes verdes

Para visualizar:

```bash
git log --oneline
```

#