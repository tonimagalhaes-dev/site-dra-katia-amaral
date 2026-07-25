# Implementation Plan: Jornada Mobile de Conversão da Otomodelação

**Branch**: `001-mobile-conversion` (feature identificada; worktree atual em `develop`) | **Date**: 2026-07-25 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-mobile-conversion/spec.md`

## Summary

O incremento transforma `/otomodelacao` em uma jornada mobile de campanha focada em
WhatsApp, sem modificar a navegação das demais rotas. A solução cria um shell específico
com logo e CTA, unifica os CTAs em um link resiliente e rastreável, reorganiza os casos de
resultado em uma galeria acessível e torna o GTM o único proprietário das tags. O trabalho
preserva React/Vite/Tailwind e Embla, adicionando testes de componente e de navegador.

## Technical Context

**Language/Version**: TypeScript 5.5, React 18.3, HTML/CSS

**Primary Dependencies**: Vite 7, React Router 6, Tailwind CSS 3.4, Embla Carousel 8,
React Helmet Async

**Storage**: `sessionStorage` somente para atribuição first-touch com campos permitidos;
sem backend ou banco de dados

**Testing**: Vitest, React Testing Library, user-event, jest-dom, jsdom; Playwright com axe
para smoke tests mobile; Lighthouse/DevTools e depuradores das plataformas para evidência
manual

**Target Platform**: Navegadores mobile modernos, prioritariamente 360 px, 390 px e
430 px; regressão desktop nas rotas institucionais

**Project Type**: Aplicação web SPA pública

**Performance Goals**: LCP p75 <= 2,5 s, INP p75 <= 200 ms e CLS p75 <= 0,1; build de
produção sem regressão relevante de bundle

**Constraints**: WCAG 2.2 AA; alvos >= 44x44 px; zero overflow horizontal; WhatsApp
independente das tags; nenhuma informação clínica/privada na mensuração; texto e mídia
dependem de aprovação; outras rotas não podem mudar

**Scale/Scope**: Uma rota de campanha, cinco posições de CTA (`header`, `hero`,
`results`, `persistent`, `final`), nove casos existentes, três destinos de mensuração
via GTM e testes das rotas afetadas

## Constitution Check

*GATE: Passed before Phase 0 and re-checked after Phase 1.*

- **Mobile-first conversion — PASS**: jornada única até WhatsApp, cabeçalho sem saídas,
  barra persistente e critérios explícitos para 360/390/430 px (FR-001–005, SC-001/002).
- **Responsible clinical content — PASS WITH RELEASE DEPENDENCY**: texto absoluto ou de
  vergonha será substituído; credenciais, nomes das vistas e autorizações de imagem
  precisam de aprovação registrada antes da publicação (FR-009–011, NFR-005, SC-008).
- **Measurement integrity and privacy — PASS WITH EXTERNAL DEPENDENCY**: contratos
  versionados definem evento, posição, `event_id`, atribuição permitida e campos proibidos.
  O container GTM precisa ser configurado e validado antes da publicação (FR-012–015).
- **Accessibility and performance — PASS**: controles de 44 px, teclado, foco, `aria-live`,
  movimento reduzido, placeholders de imagem, CWV e testes mobile estão definidos
  (FR-006/007, NFR-001–007, SC-005/006).
- **Spec-first evidence — PASS**: contratos e quickstart mapeiam validações a FR, NFR, SC
  e histórias; `tasks.md` será produzido somente na próxima fase.

## Project Structure

### Documentation (this feature)

```text
specs/001-mobile-conversion/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── analytics-events.md
│   └── campaign-ui.md
└── tasks.md                 # criado posteriormente por speckit-tasks
```

### Source Code (repository root)

```text
index.html
src/
├── App.tsx
├── analytics/
│   ├── analytics.ts
│   ├── attribution.ts
│   ├── types.ts
│   └── usePageView.ts
├── components/
│   ├── Header.tsx                    # preservado para rotas institucionais
│   ├── Footer.tsx                    # preservado para rotas institucionais
│   ├── BeforeAfterSlider.tsx         # substituído na rota de campanha
│   └── campaign/
│       ├── CampaignHeader.tsx
│       ├── CampaignShell.tsx
│       ├── PersistentWhatsAppCta.tsx
│       ├── ResultsCarousel.tsx
│       └── WhatsAppCta.tsx
├── data/
│   └── otomodelacaoResults.ts
├── pages/
│   └── Otomodelacao.tsx
└── test/
    └── setup.ts
tests/
├── e2e/
│   ├── otomodelacao-mobile.spec.ts
│   └── institutional-regression.spec.ts
└── fixtures/
```

**Structure Decision**: manter a SPA atual e adicionar componentes isolados em
`components/campaign`. `CampaignShell` seleciona a experiência pelo roteamento dentro do
Router; Header, Footer e CTA flutuante atuais permanecem nas demais rotas. Testes unitários
ficam próximos aos módulos e testes de navegador ficam em `tests/e2e`.

## Design Decisions

1. **Shell por rota**: menor mudança capaz de separar campanha e site institucional. A
   landing usa cabeçalho com logo + WhatsApp e rodapé mínimo contendo apenas identidade,
   localização e informações legais aprovadas, sem links ou navegação concorrente.
2. **Link real para WhatsApp**: cada CTA é um `<a>` com destino válido; analytics é
   efeito secundário e nunca chama `preventDefault`, espera callback ou controla abertura.
3. **Integração direta centralizada**: como o GTM não está em uso, `index.html` mantém
   somente uma inicialização Google com pageview automático desativado. A aplicação
   distribui eventos para GA4, Google Ads e Meta por uma única camada, sem snippets
   legados. Consentimento começa negado e o Meta Pixel só carrega após sinal válido.
4. **Galeria especializada sobre Embla**: um caso por slide, duas vistas nomeadas somente
   após aprovação, contador, controles localizados de 44 px, teclado, swipe, estados de
   erro e aviso de variação. Não alterar o componente genérico se isso arriscar outras rotas.
5. **Ação persistente contextual**: `IntersectionObserver` mostra a barra depois que o CTA
   inicial sai e a oculta perto do CTA final. Falha do observer deixa um CTA utilizável.
6. **Qualidade em camadas**: Vitest/RTL cobre contratos e estados; Playwright cobre
   viewports e regressão; axe/Lighthouse e depuradores GA/Ads/Meta produzem evidência.

## Delivery Phases

### Phase A — Foundations and safety

- Introduzir tooling de testes e capturar o baseline conhecido de lint.
- Criar contratos tipados de CTA, atribuição e `dataLayer`.
- Implementar shell de campanha sem alterar as rotas institucionais.

### Phase B — Mobile conversion experience

- Refatorar hero, conteúdo e linguagem da landing.
- Implementar CTA compartilhado e barra persistente com safe-area.
- Implementar galeria acessível e resiliente com dados tipados.

### Phase C — Measurement and validation

- Centralizar eventos e pageviews; limpar bootstraps duplicados.
- Configurar a camada direta para GA4, Ads e Meta com os contratos v1.
- Executar testes automatizados, QA visual, CWV e validação de tags.
- Obter aprovações clínica, de credenciais e de mídia antes da publicação.

## Validation Matrix

| Evidence | Requirements |
|---|---|
| Playwright 360/390/430, overflow e sobreposição | FR-001–008, NFR-001/002/006/007, SC-001/005 |
| RTL: shell, CTA, galeria, observer e falhas | FR-003–008/013/016, SC-004/007/009 |
| Analytics unit/integration + GTM Preview | FR-012–015, NFR-004, SC-004/007 |
| axe + teclado manual | FR-007, NFR-002, SC-005 |
| Lighthouse mobile + dados de campo após 28 dias | NFR-003, SC-006 |
| Registro de aprovação da responsável técnica | FR-009–011, NFR-005, SC-008 |
| Teste moderado com cinco participantes | SC-002/003 |

## Complexity Tracking

Não há violação constitucional. Playwright/axe adicionam custo de desenvolvimento, mas
são necessários para verificar viewports, acessibilidade e não regressão que testes
jsdom não observam. O container GTM continua externo por já ser a infraestrutura ativa;
seu versionamento e evidência de Preview são dependências explícitas de release.
