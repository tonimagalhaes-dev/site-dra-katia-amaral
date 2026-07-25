# Contract: Campaign UI

## Shell

- `/otomodelacao`: no mobile, o cabeçalho contém somente logo, nome e registro profissional;
  o CTA do cabeçalho aparece apenas a partir do desktop. Não há menu nem links institucionais
  concorrentes. O rodapé contém nome, registro profissional, endereço, informações legais
  aprovadas e um link contextual do endereço para o Google Maps, sem função de menu.
- Outras rotas: preservam Header, Footer e comportamento institucional atuais.

## WhatsApp CTA

- Elemento: `<a>` com `href` absoluto `https://wa.me/...`, mensagem aprovada,
  `target="_blank"` e `rel="noopener noreferrer"`.
- Propriedades: `position`, `label`, `className`.
- Comportamento: funciona sem JavaScript; tracking não usa `preventDefault`.
- Acessibilidade: nome explícito, foco visível, alvo >= 44x44 px e quebra de texto.

## Barra persistente

- Mobile, começa oculta quando a visibilidade pode ser observada, respeita
  `env(safe-area-inset-bottom)` e reserva espaço equivalente no conteúdo.
- Aparece quando o CTA inicial deixa a área visível e some quando o CTA final entra.
- Falha/ausência de `IntersectionObserver` mantém uma ação disponível.
- Não cobre controles da galeria ou conteúdo essencial.

## Galeria

- Um paciente por slide, com suas vistas agrupadas.
- Exibe “Caso X de N”, botões “Caso anterior” e “Próximo caso”, indicadores e aviso
  de que resultados variam.
- Suporta toque/swipe, botões, ArrowLeft/ArrowRight e foco visível.
- Botões têm >= 44x44 px e estado disabled correto, sem loop.
- Mudança de caso é anunciada em `aria-live="polite"`.
- Imagens têm dimensões/aspect ratio; a primeira é prioritária, demais lazy.
- Falha de imagem preserva rótulo, caso e espaço da mídia.

## Hero

- Em 360/390/430 px: zero overflow; título, proposta, identidade e CTA completos.
- CTA usa largura fluida e texto quebrável.
- Imagem decorativa tem alt vazio e prioridade coerente; preload é específico da rota ou
  removido quando não puder ser específico.

## Evidência

Playwright verifica viewports e rotas; RTL verifica estados/contratos; axe e teclado
verificam acessibilidade. Aprovação da responsável técnica é obrigatória para texto,
credenciais, nomes de vistas e mídia publicada.
