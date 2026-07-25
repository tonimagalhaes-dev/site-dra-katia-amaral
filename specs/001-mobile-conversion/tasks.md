# Tasks: Jornada Mobile de Conversão da Otomodelação

**Input**: Design documents from `/specs/001-mobile-conversion/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`,
`contracts/analytics-events.md`, `contracts/campaign-ui.md`

**Tests and evidence**: Os testes são obrigatórios porque a spec e a constituição exigem
proteção automatizada para jornada, tracking e regressões. Trabalho visual público inclui
evidência em 360 px, 390 px e 430 px, além de validação desktop proporcional.

**Organization**: As tarefas estão agrupadas por história para permitir implementação e
validação incremental. Cada checkbox só pode ser concluído após a evidência descrita.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: pode ser executada em paralelo por alterar arquivos distintos e não depender de
  uma tarefa incompleta
- **[Story]**: história de usuário correspondente
- todos os itens possuem caminho exato de arquivo ou artefato

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: preparar ferramentas e estrutura sem mudar comportamento público

- [X] T001 Criar a branch `001-mobile-conversion`, atualizar `Feature Branch` em `specs/001-mobile-conversion/spec.md` e registrar o baseline de build/lint em `specs/001-mobile-conversion/evidence/baseline.md`
- [X] T002 Adicionar scripts e devDependencies de Vitest, React Testing Library, user-event, jest-dom e jsdom em `package.json` e `package-lock.json`
- [X] T003 [P] Configurar Vitest e aliases de teste em `vite.config.ts` e criar o bootstrap em `src/test/setup.ts`
- [X] T004 [P] Adicionar Playwright e axe, projetos mobile 360/390/430 e desktop, webServer de preview e scripts correspondentes em `playwright.config.ts`, `package.json` e `package-lock.json`

**Checkpoint**: build de baseline documentado e runners unitário/E2E executáveis.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: contratos compartilhados por todas as histórias

**⚠️ CRITICAL**: nenhuma história começa antes desta fase.

- [X] T005 [P] Definir `CtaPosition`, contratos `dataLayer` e tipos globais sem dados sensíveis em `src/analytics/types.ts`
- [X] T006 [P] Confirmar número e mensagem oficial com a responsável, registrar em `specs/001-mobile-conversion/evidence/content-approvals.md` e centralizar a construção do link em `src/lib/constants.ts`
- [X] T007 [P] Criar utilitários de renderização com Router/Helmet e limpeza de globals em `src/test/render.tsx`
- [ ] T008 [P] Criar testes do payload, UUID, deduplicação, `dataLayer` ausente e proibição de campos sensíveis em `src/analytics/analytics.test.ts`
- [ ] T009 [P] Criar testes de atribuição allowlisted, first-touch, sanitização e storage indisponível em `src/analytics/attribution.test.ts`
- [ ] T010 [P] Criar testes do contrato de link, mensagem, cinco posições, duplo toque, foco e falha de analytics em `src/components/campaign/WhatsAppCta.test.tsx`
- [X] T011 Implementar o dispatcher defensivo de eventos, UUID e guarda de duplo toque de 750 ms em `src/analytics/analytics.ts`
- [X] T012 Implementar captura first-touch allowlisted, sanitização de 100 caracteres e fallback de `sessionStorage` em `src/analytics/attribution.ts`
- [X] T013 Criar o link reutilizável, sem `preventDefault` e com tracking por posição em `src/components/campaign/WhatsAppCta.tsx`
- [X] T014 Executar os testes de setup e registrar versões, comandos e resultado da fundação em `specs/001-mobile-conversion/evidence/foundation.md`

**Checkpoint**: CTA e contratos compartilhados estão tipados e testáveis sem depender de
layout, galeria ou fornecedor externo.

---

## Phase 3: User Story 1 — Entender a oferta e iniciar contato (Priority: P1) 🎯 MVP

**Goal**: entregar uma primeira dobra mobile clara, cabeçalho somente com logo + WhatsApp,
CTA resiliente e ação persistente, preservando as demais rotas.

**Independent Test**: abrir `/otomodelacao` em 360, 390 e 430 px, identificar procedimento,
profissional e CTA em até 10 segundos, acionar o link sem corte e confirmar que as rotas
institucionais continuam com seu shell atual.

### Tests for User Story 1

> Escrever primeiro e confirmar falha antes da implementação.

- [X] T015 [P] [US1] Criar testes de shell da campanha versus shell institucional e rodapé mínimo sem links em `src/components/campaign/CampaignShell.test.tsx`
- [ ] T016 [P] [US1] Criar testes da visibilidade, fallback do observer e espaço reservado da barra em `src/components/campaign/PersistentWhatsAppCta.test.tsx`
- [ ] T017 [P] [US1] Criar cenários E2E da primeira dobra, header, rodapé sem links, overflow, safe-area, teclado e rotas institucionais em `tests/e2e/otomodelacao-mobile.spec.ts` e `tests/e2e/institutional-regression.spec.ts`

### Implementation for User Story 1

- [X] T018 [P] [US1] Implementar cabeçalho de campanha com somente logo e CTA `header` em `src/components/campaign/CampaignHeader.tsx`
- [X] T019 [US1] Implementar o shell route-aware com rodapé mínimo sem links, preservando Header, Footer e CTA atuais das outras rotas em `src/components/campaign/CampaignShell.tsx` e `src/App.tsx`
- [X] T020 [US1] Refatorar hero, semântica, texto respeitoso, imagem prioritária e CTAs `hero`/`final` em `src/pages/Otomodelacao.tsx`
- [X] T021 [P] [US1] Implementar a barra persistente com IntersectionObserver, fallback e safe-area em `src/components/campaign/PersistentWhatsAppCta.tsx`
- [X] T022 [US1] Integrar sentinelas da primeira/final dobra e reservar espaço para a barra em `src/pages/Otomodelacao.tsx` e `src/index.css`
- [ ] T023 [US1] Executar testes US1 e registrar screenshots 360/390/430, teclado, axe e regressão desktop em `specs/001-mobile-conversion/evidence/us1-mobile-journey.md`

**Checkpoint**: US1 é um MVP funcional e demonstrável, independente da nova galeria e da
configuração final do GTM.

---

## Phase 4: User Story 2 — Avaliar resultados e confiança (Priority: P2)

**Goal**: apresentar casos autorizados de forma compreensível e acessível, com credenciais
verificáveis e CTA contextual.

**Independent Test**: entrar diretamente na seção de resultados, identificar “Caso X de
N”, navegar por toque/botões/teclado, reconhecer as vistas do mesmo paciente, observar o
fallback de imagem e encontrar o CTA `results`.

### Tests for User Story 2

> Escrever primeiro e confirmar falha antes da implementação.

- [ ] T024 [P] [US2] Criar testes do filtro de autorização, ordem, rótulos e dimensões dos casos em `src/data/otomodelacaoResults.test.ts`
- [ ] T025 [P] [US2] Criar testes de contador, controles, teclado, `aria-live`, caso único e erro de imagem em `src/components/campaign/ResultsCarousel.test.tsx`
- [ ] T026 [P] [US2] Ampliar o E2E para swipe, botões de 44 px, foco, imagem quebrada e movimento reduzido em `tests/e2e/otomodelacao-results.spec.ts`

### Implementation for User Story 2

- [X] T027 [US2] Confirmar nomes das vistas e excluir do conjunto publicável todo caso sem autorização, registrando a decisão em `specs/001-mobile-conversion/evidence/content-approvals.md`
- [X] T028 [US2] Modelar os casos aprovados, vistas, alt text e dimensões em `src/data/otomodelacaoResults.ts`
- [X] T029 [US2] Implementar galeria Embla sem loop, controles pt-BR, contador, indicadores, lazy loading e fallback em `src/components/campaign/ResultsCarousel.tsx`
- [X] T030 [US2] Integrar galeria, aviso de variação, CTA `results` e bloco de confiança somente com credenciais verificadas em `src/pages/Otomodelacao.tsx`
- [ ] T031 [US2] Executar testes US2 e registrar galeria mobile, acessibilidade, casos de erro e aprovação clínica/mídia em `specs/001-mobile-conversion/evidence/us2-results-and-trust.md`

**Checkpoint**: US2 funciona isoladamente sobre a fundação e não depende da distribuição
externa dos eventos.

---

## Phase 5: User Story 3 — Medir contatos da campanha com confiança (Priority: P3)

**Goal**: produzir um único evento neutro por ação e um pageview por navegação, com
atribuição mínima e WhatsApp independente das tags.

**Independent Test**: acionar cada posição, verificar um `whatsapp_contact` com `event_id`
e posição, bloquear o GTM e confirmar navegação; navegar por SPA e observar um único
`virtual_page_view` sem query sensível.

### Tests for User Story 3

> Escrever primeiro e confirmar falha antes da implementação.

- [ ] T032 [P] [US3] Criar testes do pageview inicial/SPA, pathname sanitizado e StrictMode em `src/analytics/usePageView.test.tsx`
- [ ] T033 [P] [US3] Criar E2E de cinco posições, tag bloqueada e pageview por rota em `tests/e2e/otomodelacao-analytics.spec.ts`

### Implementation for User Story 3

- [X] T034 [US3] Integrar atribuição ao evento `whatsapp_contact` e garantir um push por ativação em `src/analytics/analytics.ts` e `src/analytics/attribution.ts`
- [X] T035 [US3] Implementar e montar o `virtual_page_view` único por navegação em `src/analytics/usePageView.ts` e `src/components/campaign/CampaignShell.tsx`
- [X] T036 [US3] Identificar a fonte válida de consentimento e seu responsável, validar a transição negado→concedido de `src/analytics/consent.ts` e registrar em `specs/001-mobile-conversion/evidence/consent-configuration.md`
- [X] T037 [US3] Remover GTM e snippets legados, manter uma única inicialização Google com consentimento negado e carregamento condicional do Meta em `index.html` e `src/analytics/consent.ts`
- [ ] T038 [US3] Validar as cinco posições em GA4 DebugView, Google Ads/Tag Assistant e Meta Test Events, incluindo bloqueio, e registrar evidências em `specs/001-mobile-conversion/evidence/us3-measurement.md`

**Checkpoint**: todas as histórias funcionam e a mensuração possui evidência por destino,
sem bloquear a conversão.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: fechar gates constitucionais e de publicação

- [X] T039 [P] Remover preload global incorreto e garantir preload/prioridade específico da hero em `index.html` e `src/pages/Otomodelacao.tsx`
- [X] T040 [P] Adicionar regras globais de movimento reduzido e proteção contra overflow sem afetar rotas institucionais em `src/index.css`
- [X] T041 Corrigir todos os erros de lint nos arquivos alterados e a dívida preexistente necessária para o gate global em `src/`, registrando o resultado em `specs/001-mobile-conversion/evidence/quality-gates.md`
- [X] T042 Executar build, unitários e E2E completos e registrar comandos/resultados em `specs/001-mobile-conversion/evidence/quality-gates.md`
- [ ] T043 [P] Executar Lighthouse mobile no preview, comparar bundle/CWV ao baseline e registrar os budgets de laboratório em `specs/001-mobile-conversion/evidence/performance.md`
- [ ] T044 [P] Executar revisão WCAG 2.2 AA, contraste, foco, teclado e alvos de toque e registrar em `specs/001-mobile-conversion/evidence/accessibility.md`
- [ ] T045 Realizar teste moderado com cinco participantes, obter resultado mínimo de 4/5 para SC-002 e SC-003 e registrar em `specs/001-mobile-conversion/evidence/usability.md`; resultado ausente ou inferior bloqueia aceite/publicação
- [X] T046 Consolidar aprovações de texto clínico, credenciais e todas as mídias publicadas em `specs/001-mobile-conversion/evidence/content-approvals.md`
- [ ] T047 Executar integralmente `specs/001-mobile-conversion/quickstart.md` e registrar o readiness técnico, autorização de publicação e gates pós-publicação em `specs/001-mobile-conversion/evidence/release-readiness.md`
- [ ] T048 Após 28 dias da publicação, consultar LCP/INP/CLS p75 mobile, registrar SC-006 e responsável em `specs/001-mobile-conversion/evidence/performance.md` e atualizar o aceite final em `specs/001-mobile-conversion/evidence/release-readiness.md`; ausência ou falha do dado mantém o aceite pendente
- [X] T049 Remover o botão persistente de preferências após a decisão do banner e proteger o comportamento em `src/components/consent/CookieConsentBanner.test.tsx`
- [X] T050 Adicionar endereço do consultório e link acessível para o Google Maps no rodapé da campanha em `src/components/campaign/CampaignShell.tsx` e atualizar seu contrato e teste
- [X] T051 Ampliar a seção de perguntas frequentes com o conteúdo aprovado, revisado para comunicação clínica responsável, em `src/pages/Otomodelacao.tsx`
- [X] T052 Corrigir a regressão do merge com `main`, removendo a dependência institucional
  de `GTM_ID`, preservando a distribuição direta e garantindo uma única instância de
  `BrowserRouter` em `src/services/analyticsService.ts`, `src/App.tsx` e
  `src/services/analyticsService.test.ts`
- [X] T053 Reduzir a sobrecarga de CTAs na primeira dobra mobile, ocultando o CTA do
  cabeçalho, iniciando a barra persistente oculta até o CTA do hero sair da tela e
  atualizando sua microcopy em `src/components/campaign/CampaignHeader.tsx` e
  `src/components/campaign/PersistentWhatsAppCta.tsx`
- [X] T054 Substituir “Enfermeira Esteta” por `COREN-SP 310.193` no cabeçalho e rodapé da
  campanha em `src/components/campaign/CampaignHeader.tsx` e
  `src/components/campaign/CampaignShell.tsx`
- [X] T055 Substituir a barra inferior pela transferência contextual do CTA entre hero e
  cabeçalho, incluindo suporte à montagem lazy, fallback por rolagem, animação reduzível e
  E2E de ida/volta em `src/components/campaign/CampaignHeader.tsx`,
  `src/components/campaign/CampaignShell.tsx` e `tests/e2e/otomodelacao-mobile.spec.ts`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: começa imediatamente.
- **Foundational (Phase 2)**: depende do Setup e bloqueia todas as histórias.
- **US1 (Phase 3)**: depende da fundação; é o MVP.
- **US2 (Phase 4)**: depende da fundação e integra seu CTA ao componente compartilhado;
  pode ser desenvolvida em paralelo com US1 após T013, mas a integração final em
  `Otomodelacao.tsx` deve ser serializada.
- **US3 (Phase 5)**: depende da fundação; testes/serviços podem avançar em paralelo, mas
  T035 depende do shell de T019, T037 depende da aprovação de T036 e T038 depende de
  configuração e limpeza concluídas.
- **Polish (Phase 6)**: depende de todas as histórias destinadas ao release.

### User Story Dependency Graph

```text
Setup → Foundation → US1 (MVP)
                   ├→ US2
                   └→ US3
US1 + US2 + US3 → Polish/Release
```

US2 e US3 são independentemente testáveis após a fundação. A única dependência técnica
cruzada é a montagem do pageview no shell criado por US1; ela não altera o valor ou os
critérios de teste de US3.

### Within Each User Story

- testes são escritos e observados falhando antes da implementação;
- modelo/contrato antecede componente e integração;
- tarefas que alteram `src/pages/Otomodelacao.tsx` são executadas serialmente;
- evidência fecha a história somente após implementação e testes verdes.

## Parallel Opportunities

### User Story 1

```text
T015 CampaignShell.test.tsx
T016 PersistentWhatsAppCta.test.tsx
T017 testes E2E
T018 CampaignHeader.tsx
T021 PersistentWhatsAppCta.tsx
```

Após esses itens, T019, T020 e T022 integram sequencialmente os mesmos pontos da aplicação.

### User Story 2

```text
T024 otomodelacaoResults.test.ts
T025 ResultsCarousel.test.tsx
T026 otomodelacao-results.spec.ts
```

T027 libera T028; T028 libera T029; T030 integra o conjunto.

### User Story 3

```text
T032 usePageView.test.tsx
T033 otomodelacao-analytics.spec.ts
```

Os testes de atribuição e dispatcher já pertencem à fundação (T008/T009). T034 e T035
seguem os respectivos testes; T036 começa quando houver acesso e fonte válida de
consentimento, T037 exige sua aprovação e T038 fecha a validação.

## Implementation Strategy

### MVP First

1. Concluir Setup.
2. Concluir Foundation.
3. Implementar US1.
4. Parar e validar jornada mobile e regressão institucional.
5. Demonstrar o MVP localmente; não publicar sem os gates aplicáveis.

### Incremental Delivery

1. **US1**: oferta, shell e contato resiliente.
2. **US2**: resultados autorizados e confiança.
3. **US3**: mensuração confiável e pageviews.
4. **Polish**: qualidade, performance, aprovações e readiness.

Cada checkpoint deve manter build e testes da parcela verdes. Uma história pode ser
demonstrada antes das seguintes, mas publicação final exige todas as tarefas de release.

## Task Traceability

| Story | Tasks | Primary coverage |
|---|---|---|
| Foundation | T005–T014 | Contratos compartilhados, FR-005/012–014, NFR-002/004/006 |
| US1 | T015–T023 | FR-001–005/011/016, NFR-001/002/006/007, SC-001/002/005/009 |
| US2 | T024–T031 | FR-006–010, NFR-002/005/006/007, SC-003/005/008 |
| US3 | T032–T038 | FR-012–015, NFR-004/006, SC-004/007 |
| Cross-cutting | T039–T048 | NFR-001–007, SC-002/003/005/006/008/009 |

## Notes

- `[P]` significa arquivos distintos e ausência de dependência incompleta.
- Não concluir tarefas de GTM ou aprovação apenas com mocks locais.
- Não publicar casos, vistas ou credenciais cuja evidência esteja pendente.
- O p75 de CWV requer RUM após publicação; Lighthouse é evidência de laboratório.
- Commits devem acompanhar tarefas ou grupos lógicos pequenos e revisáveis.
