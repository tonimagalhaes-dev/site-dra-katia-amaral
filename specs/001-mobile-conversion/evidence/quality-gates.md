# Quality gates — 2026-07-25

- `npm run lint`: PASS.
- `npm run build`: PASS.
- `npm run test`: PASS, 9 arquivos/12 testes, incluindo o fluxo de consentimento.
- `npm run test:e2e -- --project=mobile-360 --project=mobile-390 --project=mobile-430`:
  PASS, 9 testes.
- O E2E cobre a jornada da campanha, os resultados e a regressão institucional nas
  larguras de 360, 390 e 430 px.
- Após os ajustes de consentimento, rodapé e FAQ: unitários 12/12, lint e build PASS;
  E2E mobile 9/9 nas larguras de 360, 390 e 430 px.
- Após o merge `ce711a8` com `main`: removida a importação residual de `GTM_ID` e o
  `BrowserRouter` duplicado; build Vite PASS com 1.710 módulos, unitários 14/14, lint PASS
  e E2E mobile 9/9.
- Chunk Otomodelação: 42,20 kB / 15,32 kB gzip (baseline: 43,65 / 15,42).

Gates externos e validações manuais permanecem abertos conforme `tasks.md`.
