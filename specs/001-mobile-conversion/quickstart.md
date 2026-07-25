# Quickstart de Implementação e Validação

## 1. Pré-condições

- Confirmar número e mensagem oficial do WhatsApp.
- Confirmar função, registro, experiência e localização publicados.
- Confirmar autorização de cada caso e nomes das duas vistas.
- Obter acesso aos depuradores GA4, Ads e Meta.
- Identificar a fonte válida de consentimento e seu responsável; sem ela, manter as tags
  negadas e bloquear o aceite final.
- Criar/switch para a branch `001-mobile-conversion` antes de implementar.

Sem essas aprovações, o código pode ser testado localmente, mas não publicado.

## 2. Implementação orientada pelos contratos

1. Adicionar Vitest/RTL e Playwright/axe, configuração e testes de baseline.
2. Criar analytics/atribuição conforme `contracts/analytics-events.md`.
3. Criar `CampaignShell` e `WhatsAppCta`; manter outras rotas inalteradas.
4. Refatorar hero e conteúdo aprovado.
5. Criar a galeria conforme `contracts/campaign-ui.md`.
6. Criar a transferência contextual do CTA entre hero e cabeçalho e seu fallback.
7. Remover GTM e snippets legados; validar a camada direta e a transição de consentimento
   nos depuradores dos três fornecedores.

## 3. Comandos locais esperados

```powershell
npm install
npm run build
npm run test
npm run test:e2e
npm run lint
npm run preview
```

O lint atual tem 36 erros preexistentes. Durante a feature, executar também lint nos
arquivos alterados; registrar separadamente qualquer limpeza necessária para tornar o
gate global verde, pois a constituição exige build e lint antes da conclusão.

## 4. QA mobile

Em 360x800, 390x844 e 430x932:

- confirmar cabeçalho sem CTA enquanto o CTA do hero estiver visível;
- confirmar primeira dobra e todos os CTAs sem overflow/corte;
- rolar e verificar a entrada do CTA “WhatsApp” no cabeçalho e seu desaparecimento ao
  retornar ao hero;
- navegar todos os casos por toque, botões e teclado;
- simular imagem quebrada e `prefers-reduced-motion`;
- executar axe e inspecionar contraste/alvos/foco;
- confirmar que páginas institucionais mantêm navegação e CTA atuais.

Mapeamento: FR-001–011/016, NFR-001/002/006/007, SC-001–003/005/009.

## 5. QA de mensuração

Para cada posição ativa `header`, `hero`, `results` e `final`:

1. Abrir os depuradores dos fornecedores e limpar os logs.
2. Acionar o CTA uma vez.
3. Confirmar abertura imediata do WhatsApp.
4. Confirmar um `whatsapp_contact`, mesmo `event_id` e posição nos três destinos.
5. Repetir com tag bloqueada/offline e confirmar que o link continua funcionando.
6. Validar hard refresh e navegação SPA para um único `virtual_page_view`.
7. Confirmar que payloads não contêm mensagem, telefone ou query arbitrária.

Mapeamento: FR-012–015, NFR-004/006, SC-004/007.

## 6. Performance e aceite de publicação

- Rodar Lighthouse mobile no preview de produção: LCP <= 2,5 s, CLS <= 0,1 e sem
  regressão relevante; consultar dados de campo após 28 dias da publicação para confirmar
  LCP p75 <= 2,5 s, INP p75 <= 200 ms e CLS p75 <= 0,1.
- Realizar teste moderado com cinco participantes para SC-002/003.
- Anexar evidências de aprovação clínica/mídia, QA mobile, Lighthouse, testes e tags ao
  release.
- Não marcar a feature como aceita enquanto pesquisa moderada, dados de campo,
  consentimento e demais gates externos estiverem pendentes.
