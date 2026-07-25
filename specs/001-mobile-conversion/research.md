# Phase 0 Research: Jornada Mobile de Conversão

## R1 — Isolamento da rota de campanha

**Decision**: criar um shell específico selecionado dentro do React Router.

**Rationale**: Header, Footer e CTA flutuante são globais hoje. Isolar `/otomodelacao`
atende ao cabeçalho aprovado e protege FR-016 sem duplicar a aplicação.

**Alternatives considered**:
- Condicionar elementos dentro do Header global: rejeitado por acoplamento e regressão.
- Migrar todas as rotas para nested layouts: válido no longo prazo, maior que o escopo.

## R2 — CTA resiliente

**Decision**: usar um `<a>` real para `wa.me`, compartilhado por todas as posições, com
analytics como efeito secundário que nunca bloqueia a navegação.

**Rationale**: o fluxo atual que depende de `event_callback` pode atrasar ou perder o
contato. Um link mantém fallback nativo quando scripts falham ou são bloqueados.

**Alternatives considered**:
- `window.open` depois do callback: rejeitado por popup blocker e indisponibilidade.
- Handlers separados: rejeitados porque já causaram divergência de eventos.

## R3 — Propriedade de tags e eventos

**Decision**: após confirmação de que o GTM não está em uso, remover seus bootstraps e
distribuir eventos diretamente para GA4, Google Ads e Meta por uma camada centralizada.

**Rationale**: hoje GTM aparece duas vezes, GA4 e Meta também são inicializados diretamente
e o conteúdo do container é externo. Uma fonte de distribuição reduz duplicação e deixa
o contrato da aplicação testável.

**Alternatives considered**:
- SDKs diretos dos três fornecedores: rejeitados por bundle e dupla propriedade.
- GTM + tags diretas: rejeitado por risco de dupla contagem.

**Release dependency**: validar GA4, Ads e Meta em seus depuradores após sinal válido de
consentimento. Não existe migração ou convivência com o container GTM-W9J8QQDS.

## R4 — Atribuição e privacidade

**Decision**: preservar first-touch em `sessionStorage` apenas para `utm_source`,
`utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid` e `fbclid`; limitar cada
valor a 100 caracteres e rejeitar caracteres de controle.

**Rationale**: mantém contexto da campanha durante a sessão sem guardar mensagem,
telefone, nome, interesse clínico, query completa ou referrer.

**Alternatives considered**:
- `localStorage`: rejeitado por retenção superior à necessidade.
- Enviar `location.search`: rejeitado porque parâmetros arbitrários podem ser sensíveis.

**Release dependency**: o consentimento precisa ser configurado no GTM com padrão negado
e a fonte do sinal válido precisa ter responsável e evidência. Uma CMP nova está fora do
escopo; sem fonte válida, as tags permanecem negadas e a feature não recebe aceite final.

## R5 — Pageview de SPA

**Decision**: emitir `virtual_page_view` uma vez por navegação confirmada, com pathname
sanitizado, e desativar pageviews automáticos/paralelos no GTM.

**Rationale**: o hook existente não é usado; ativá-lo sem remover o pageview inicial
duplicaria eventos. Uma guarda deve tolerar o remount de StrictMode em desenvolvimento.

## R6 — Galeria de resultados

**Decision**: manter Embla, modelar um paciente por slide e adicionar contador, controles
pt-BR de 44 px, teclado, swipe, anúncio de estado, placeholders, erro e disclaimer.

**Rationale**: a dependência já resolve movimento/gesto. O problema atual é de modelo e
apresentação, não de motor do carrossel.

**Alternatives considered**:
- Nova biblioteca: rejeitada por custo e bundle sem benefício comprovado.
- Pilha de imagens sem navegação: rejeitada por comprimento e comparação confusa.

**Content dependency**: nomes como frontal/posterior e autorização de cada caso precisam
ser confirmados; casos sem autorização não são publicados.

## R7 — Transferência contextual do CTA

**Decision**: manter o CTA grande no hero e exibir um CTA compacto no cabeçalho somente
quando o primeiro sair integralmente da tela, usando `IntersectionObserver` e fallback
por rolagem.

**Rationale**: mantém a ação disponível durante a navegação, evita CTAs simultâneos na
primeira dobra e elimina a barra fixa inferior que competia com o conteúdo.

## R8 — Testes e performance

**Decision**: Vitest + RTL para lógica e componentes; Playwright + axe para 360/390/430 e
regressão; Lighthouse para laboratório e dados de campo após 28 dias para confirmar p75.

**Rationale**: jsdom não detecta overflow, safe-area, layout real nem CWV. Lighthouse não
prova p75 sozinho, por isso o dado de campo permanece validação pós-publicação.

**Baseline**: build passa. Lint possui 36 erros preexistentes; a feature deve deixar os
arquivos alterados limpos e registrar a dívida, sem atribuí-la ao incremento.

## R9 — Conteúdo clínico

**Decision**: substituir linguagem absoluta, de vergonha ou pressão por texto informativo;
publicar somente credenciais e mídias aprovadas.

**Rationale**: atende à constituição e evita que otimização de conversão ultrapasse a
responsabilidade clínica. Aprovação é gate de release, não lógica de runtime.
