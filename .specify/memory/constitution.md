<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
  - Template Principle 1 -> I. Conversão Mobile-First
  - Template Principle 2 -> II. Comunicação Clínica Responsável
  - Template Principle 3 -> III. Mensuração Íntegra e Privacidade
  - Template Principle 4 -> IV. Acessibilidade e Performance Verificáveis
  - Template Principle 5 -> V. Especificação Antes do Código
- Added sections:
  - Restrições de Qualidade
  - Fluxo de Desenvolvimento
- Removed sections: none
- Templates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
  - ✅ README.md
- Follow-up TODOs: none
-->
# Site Dra. Katia Amaral Constitution

## Core Principles

### I. Conversão Mobile-First
Toda feature voltada ao público MUST ser especificada, desenhada e validada primeiro
para celulares, pois esse é o principal contexto de uso e aquisição. A jornada principal
MUST permanecer clara em larguras de 360 px, 390 px e 430 px, sem corte, sobreposição ou
rolagem horizontal. Cada landing page de campanha MUST ter um objetivo primário e reduzir
saídas que concorram com esse objetivo. Decisões de desktop não podem degradar o fluxo
mobile.

### II. Comunicação Clínica Responsável
Conteúdo sobre procedimentos, resultados, recuperação, riscos ou indicação MUST evitar
promessas absolutas, pressão emocional e garantias universais. Afirmações clínicas MUST
ser rastreáveis a uma fonte aprovada pela responsável técnica antes da publicação.
Resultados visuais e depoimentos MUST possuir autorização de uso e informar, quando
aplicável, que resultados individuais podem variar. Clareza e segurança do paciente têm
precedência sobre aumento de conversão.

### III. Mensuração Íntegra e Privacidade
Cada ação de conversão MUST possuir um contrato de evento documentado com nome, origem,
destino, parâmetros e regra contra disparo duplicado. Alterações em CTAs, formulários,
WhatsApp, tags ou roteamento MUST incluir validação de GA4, Google Ads e Meta quando esses
canais estiverem no escopo. Dados pessoais ou de saúde não podem ser enviados a
plataformas de publicidade sem base e necessidade documentadas. O sistema MUST preservar
atribuição de campanha sem coletar dados além do necessário.

### IV. Acessibilidade e Performance Verificáveis
Requisitos de UX MUST incluir critérios mensuráveis de acessibilidade e velocidade.
Controles interativos MUST ter nome acessível, alvo mínimo de 44 por 44 px, foco visível e
uso por teclado. Texto e controles MUST atender ao menos WCAG 2.2 AA. A principal jornada
mobile MUST definir orçamentos de Core Web Vitals e impedir regressões relevantes.
Imagens MUST ter dimensões adequadas, carregamento coerente com sua prioridade e texto
alternativo útil quando transmitirem informação.

### V. Especificação Antes do Código
Nenhuma feature ou correção material pode entrar em implementação sem uma especificação
aprovada que descreva valor, escopo, cenários, requisitos e resultados mensuráveis.
O fluxo normal MUST seguir Constituição → Especificação → Clarificação → Plano → Tarefas
→ Análise → Implementação → Convergência. Testes e validações MUST ser proporcionais ao
risco e escritos antes ou junto da mudança que protegem. Divergências entre código e spec
MUST ser resolvidas atualizando deliberadamente a fonte correta, nunca por deriva
silenciosa.

## Restrições de Qualidade

- A aplicação permanece React, TypeScript e Vite enquanto uma spec aprovada não justificar
  mudança de arquitetura.
- A língua da experiência pública é pt-BR; identificadores de código podem permanecer em
  inglês quando isso melhorar consistência técnica.
- Toda feature visual MUST incluir evidência de validação mobile nos três viewports
  constitucionais e uma verificação desktop proporcional ao impacto.
- Toda mudança de conversão MUST demonstrar um único disparo por ação e identificar a
  posição do CTA.
- Build e lint MUST passar antes da conclusão. Testes automatizados MUST cobrir lógica de
  negócio, rastreamento e regressões com risco relevante; inspeção visual complementa, mas
  não substitui, testes verificáveis.
- Dependências novas MUST justificar valor, custo de carregamento e manutenção.

## Fluxo de Desenvolvimento

1. A constituição define os limites permanentes e é revisada antes de cada feature.
2. A especificação descreve WHAT e WHY, sem antecipar framework ou estrutura de arquivos.
3. Clarificações resolvem apenas decisões que alteram escopo, risco ou critérios de aceite.
4. O plano registra HOW, alternativas consideradas e o Constitution Check.
5. As tarefas mantêm rastreabilidade para requisitos e histórias, com checkpoints
   independentes.
6. A análise procura lacunas entre spec, plano e tarefas antes da implementação.
7. A implementação marca tarefas concluídas somente após validação objetiva.
8. A convergência compara o estado final com os artefatos e registra trabalho restante.

Cada passagem de fase MUST produzir um artefato revisável. O responsável pelo produto pode
pausar, corrigir ou rejeitar o artefato antes que a próxima fase comece.

## Governance

Esta constituição prevalece sobre convenções informais e prompts de implementação.
Emendas exigem motivo, impacto nos templates e atualização do Sync Impact Report.
Mudanças incompatíveis em princípios exigem versão MAJOR; novos princípios ou expansões
materiais exigem MINOR; esclarecimentos sem mudança de obrigação exigem PATCH.

Toda spec e todo plano MUST passar pelo Constitution Check. Exceções precisam ser
explícitas, temporárias, acompanhadas de risco, alternativa rejeitada e caminho de
remoção. Revisões de código MUST verificar rastreabilidade, qualidade mobile, comunicação
clínica, mensuração e evidências de validação aplicáveis.

**Version**: 1.0.0 | **Ratified**: 2026-07-25 | **Last Amended**: 2026-07-25
