# Baseline — 2026-07-25

- Branch criada: `codex/001-mobile-conversion`.
- `npm run build`: PASS; chunk Otomodelacao 43.65 kB (15.42 kB gzip), base JS
  243.26 kB (79.12 kB gzip).
- Build reportou HTML inválido por `noscript` do Meta dentro do `head`.
- `npm run lint`: FAIL com 36 erros preexistentes, incluindo App, analytics, componentes
  UI gerados e páginas institucionais.
- Dependências de teste instaladas; `npm audit` reportou 20 vulnerabilidades no grafo.
  Não foi executado `audit fix --force` por risco de breaking changes.
