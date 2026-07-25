# Feature Specification: Jornada Mobile de Conversão da Otomodelação

**Feature Branch**: `codex/001-mobile-conversion`

**Created**: 2026-07-25

**Status**: Draft

**Input**: User description: "Otimizar a jornada mobile de conversão da landing page de
otomodelação, reduzindo distrações, corrigindo a primeira dobra, melhorando a apresentação
dos resultados e garantindo mensuração confiável dos contatos pelo WhatsApp."

## Clarifications

### Session 2026-07-25

- Q: Como o WhatsApp deve aparecer no cabeçalho mobile? → A: Somente depois que o CTA do
  hero sair da tela, em formato compacto.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Entender a oferta e iniciar contato (Priority: P1)

Como pessoa que chegou por um anúncio em um celular, quero entender rapidamente qual
procedimento é oferecido, quem é a profissional e qual é o próximo passo, para decidir se
quero iniciar uma conversa pelo WhatsApp sem precisar explorar o restante do site.

**Why this priority**: É a jornada que transforma o investimento em mídia em uma
oportunidade de atendimento. Se a oferta ou a ação principal não estiverem claras, as
demais melhorias não geram valor.

**Independent Test**: Pode ser testada abrindo diretamente a landing page nas larguras de
360 px, 390 px e 430 px. A pessoa deve compreender a oferta e acionar o WhatsApp pela
primeira chamada sem corte, sobreposição ou navegação por páginas secundárias.

**Acceptance Scenarios**:

1. **Given** uma pessoa acessando a landing page por um anúncio em um celular, **When** a
   primeira dobra é exibida, **Then** ela vê o nome do procedimento, a proposta principal,
   a identificação profissional e uma chamada completa para conversar pelo WhatsApp.
2. **Given** a landing page aberta em 360 px, 390 px ou 430 px, **When** a pessoa observa e
   aciona a chamada principal, **Then** nenhum texto ou controle é cortado e o destino de
   WhatsApp recebe uma mensagem contextual sobre otomodelação.
3. **Given** uma pessoa na primeira dobra, **When** observa o cabeçalho, **Then** encontra
   somente a identidade e o registro profissional, sem CTA concorrente ou links para
   outras páginas.
4. **Given** uma pessoa rolando a página, **When** a chamada inicial deixa de estar visível,
   **Then** o CTA compacto “WhatsApp” aparece no cabeçalho; ao voltar e tornar a chamada
   inicial visível, o CTA compacto desaparece.
5. **Given** uma pessoa usando apenas teclado ou tecnologia assistiva, **When** percorre a
   jornada principal, **Then** identifica e aciona cada chamada de conversão pelo nome e
   pelo foco visível.

---

### User Story 2 - Avaliar resultados e confiança (Priority: P2)

Como pessoa interessada no procedimento, quero examinar resultados reais e sinais de
credibilidade de forma clara no celular, para decidir se vale a pena conversar com a
profissional.

**Why this priority**: Resultados e confiança reduzem a incerteza depois que a oferta é
compreendida, mas dependem da jornada primária estar funcional.

**Independent Test**: Pode ser testada acessando somente a seção de resultados e
credibilidade no celular. A pessoa deve distinguir os resultados de cada paciente,
entender como navegar entre eles e encontrar uma chamada de contato próxima.

**Acceptance Scenarios**:

1. **Given** a pessoa na seção de resultados, **When** examina o primeiro caso, **Then**
   identifica quais imagens pertencem ao mesmo paciente, quais vistas são apresentadas e
   que resultados individuais podem variar.
2. **Given** que existem vários casos, **When** a pessoa interage com a galeria, **Then**
   percebe quantos casos existem, qual está ativo e como avançar ou retornar.
3. **Given** uma imagem indisponível ou ainda carregando, **When** o caso é apresentado,
   **Then** a estrutura mantém contexto suficiente e não desloca abruptamente o restante
   da página.
4. **Given** a pessoa terminou de examinar resultados, **When** decide buscar mais
   informações, **Then** encontra uma chamada de WhatsApp antes de percorrer todo o
   restante da página.
5. **Given** a pessoa procura credenciais, **When** examina os sinais de confiança,
   **Then** encontra o nome, a função profissional, o registro, a experiência e a
   localização sem promessas clínicas absolutas.

---

### User Story 3 - Medir contatos da campanha com confiança (Priority: P3)

Como responsável pela campanha, quero que cada início de contato seja registrado uma única
vez e com a origem do CTA, para comparar os pontos da página e otimizar o investimento sem
coletar dados sensíveis desnecessários.

**Why this priority**: A mensuração não altera a percepção visual da pessoa, mas é
necessária para decisões de mídia e para evitar conclusões baseadas em eventos ausentes ou
duplicados.

**Independent Test**: Pode ser testada acionando uma vez cada CTA da landing page e
observando os registros destinados aos canais ativos. Cada ação deve gerar uma ocorrência
por destino, indicar a posição do CTA e abrir o WhatsApp mesmo quando um serviço de
mensuração estiver indisponível.

**Acceptance Scenarios**:

1. **Given** uma pessoa acionando qualquer CTA de WhatsApp, **When** a ação acontece,
   **Then** os canais de mensuração ativos recebem uma única conversão com a posição do CTA.
2. **Given** parâmetros de campanha presentes na visita, **When** o contato é iniciado,
   **Then** a atribuição disponível é preservada sem incluir conteúdo de saúde ou a mensagem
   privada da pessoa.
3. **Given** um canal de mensuração bloqueado ou indisponível, **When** o CTA é acionado,
   **Then** a abertura do WhatsApp continua funcionando.
4. **Given** navegação entre rotas antes de chegar à landing page, **When** a página é
   exibida, **Then** a visualização é registrada uma única vez para a rota correta.

### Edge Cases

- O que acontece quando o texto do CTA precisa quebrar em duas linhas em uma tela estreita?
- Como a jornada se comporta quando o WhatsApp não está instalado e precisa abrir no
  navegador?
- Como a página preserva a ação principal quando scripts de publicidade são bloqueados?
- Como a galeria comunica seu estado quando há apenas um caso disponível?
- Como a página se comporta com imagens lentas, indisponíveis ou desabilitadas?
- Como a transição do CTA entre hero e cabeçalho evita duplicidade e movimento excessivo?
- Como animações e transições se comportam quando a pessoa prefere movimento reduzido?
- Como a página evita eventos duplicados após toque repetido ou retorno pelo navegador?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A landing page MUST apresentar na primeira dobra o procedimento, sua proposta
  principal, a identificação profissional e o CTA primário de WhatsApp.
- **FR-002**: O CTA primário MUST permanecer integralmente visível e acionável em larguras
  de 360 px, 390 px e 430 px, com texto adaptável sem corte horizontal.
- **FR-003**: O cabeçalho da landing de campanha MUST apresentar somente logo, nome e
  registro profissional enquanto o CTA do hero estiver visível, sem menu ou links para
  outras páginas.
- **FR-004**: Quando o CTA do hero sair integralmente da tela, a página MUST apresentar
  um CTA compacto “WhatsApp” no cabeçalho; quando o CTA do hero voltar a ficar visível,
  o CTA compacto MUST desaparecer, sem coexistência visual entre os dois no mobile.
- **FR-005**: Todos os CTAs MUST abrir o mesmo destino de WhatsApp com mensagem contextual
  sobre otomodelação e comportamento de fallback quando o aplicativo não estiver disponível.
- **FR-006**: A seção de resultados MUST agrupar claramente as vistas de cada paciente e
  identificar o caso ativo.
- **FR-007**: Quando houver vários casos, a galeria MUST comunicar quantidade, posição e
  meios de avançar e retornar que funcionem por toque, gesto e teclado.
- **FR-008**: A página MUST apresentar um CTA contextual imediatamente após a experiência
  principal de resultados.
- **FR-009**: Imagens de pacientes MUST possuir autorização de uso registrada antes da
  publicação e MUST ser acompanhadas de aviso de variação individual de resultados.
- **FR-010**: A seção de confiança MUST apresentar credenciais verificáveis, experiência e
  localização da profissional sem criar garantia universal de resultado.
- **FR-011**: Linguagem de vergonha, pressão emocional ou promessa absoluta MUST ser
  removida ou substituída por linguagem informativa e respeitosa.
- **FR-012**: Cada CTA MUST registrar uma interação de conversão para os destinos de
  mensuração ativos, com a posição do CTA e no máximo um evento por destino para cada ação.
- **FR-013**: A falha ou o bloqueio de qualquer destino de mensuração MUST NOT impedir a
  abertura do WhatsApp.
- **FR-014**: A mensuração MUST preservar parâmetros de atribuição disponíveis e MUST NOT
  transmitir mensagem privada, interesse clínico detalhado ou outros dados de saúde.
- **FR-015**: Visualizações da landing page MUST ser registradas uma única vez por exibição
  da rota, inclusive após navegação interna.
- **FR-016**: A landing page MUST manter o restante do site institucional funcional e não
  alterar a experiência de outras rotas.
- **FR-017**: Após o visitante registrar sua escolha no banner, a interface de preferências
  de cookies MUST deixar de ser exibida durante as visitas seguintes com a escolha salva.
- **FR-018**: O rodapé da campanha MUST apresentar o endereço completo do consultório e um
  único link contextual, acessível e externo para localizar o endereço no Google Maps.
- **FR-019**: A página MUST apresentar as seis perguntas frequentes aprovadas sobre
  definição, recuperação, duração, avaliação, internação e retorno ao trabalho, usando
  linguagem clínica responsável e sem garantias universais.

### Non-Functional Requirements *(mandatory for public-facing changes)*

- **NFR-001**: A página MUST ter zero rolagem horizontal e zero corte ou sobreposição de
  conteúdo essencial em 360 px, 390 px e 430 px.
- **NFR-002**: Todos os controles interativos MUST possuir nome acessível, foco visível,
  operação por teclado e área acionável mínima de 44 por 44 px; texto e controles MUST
  atender WCAG 2.2 AA.
- **NFR-003**: No percentil 75 das visitas mobile, a maior área de conteúdo MUST aparecer
  em até 2,5 segundos, a resposta à interação MUST ocorrer em até 200 milissegundos e o
  deslocamento visual acumulado MUST permanecer em até 0,1.
- **NFR-004**: A validação de mensuração MUST demonstrar um único evento por destino e por
  ação, incluindo as posições ativas `header`, `hero`, `results` ou `final`.
- **NFR-005**: Todo texto clínico alterado e toda mídia de paciente MUST ter aprovação
  registrada antes de serem considerados prontos para publicação.
- **NFR-006**: A ação principal MUST continuar utilizável quando recursos não essenciais,
  imagens secundárias ou scripts de mensuração falharem.
- **NFR-007**: Movimento não essencial MUST respeitar a preferência de movimento reduzido.

### Key Entities

- **CTA de Conversão**: Ponto de entrada para WhatsApp, identificado por posição, rótulo,
  contexto da mensagem e estado de persistência.
- **Interação de Conversão**: Uma ação deliberada em um CTA, associada à posição, aos
  destinos de mensuração ativos e aos parâmetros não sensíveis de atribuição.
- **Caso de Resultado**: Conjunto autorizado de imagens do mesmo paciente, com vistas,
  ordem, texto alternativo e aviso de variação de resultados.
- **Credencial Profissional**: Informação verificável de identidade, função, registro,
  experiência ou localização apresentada como prova de confiança.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em 360 px, 390 px e 430 px, 100% dos elementos da primeira dobra e dos CTAs
  permanecem visíveis sem rolagem horizontal, corte ou sobreposição.
- **SC-002**: Em teste moderado, pelo menos 4 de 5 participantes identificam em até
  10 segundos o procedimento, a profissional responsável e como iniciar contato.
- **SC-003**: Pelo menos 4 de 5 participantes identificam o caso ativo e como navegar pela
  galeria de resultados sem instrução externa.
- **SC-004**: 100% dos CTAs abrem o destino correto e geram exatamente um evento por canal
  ativo, com a posição correta, em uma ação de teste.
- **SC-005**: A jornada principal pode ser concluída apenas com teclado e todos os seus
  controles possuem alvo mínimo de 44 por 44 px e contraste WCAG 2.2 AA.
- **SC-006**: No percentil 75 mobile, medido após uma janela de 28 dias da publicação, a
  maior área de conteúdo aparece em até 2,5 segundos, a interação responde em até
  200 milissegundos e o deslocamento visual acumulado não ultrapassa 0,1.
- **SC-007**: Nenhuma falha de mensuração testada impede a abertura do WhatsApp.
- **SC-008**: 100% das afirmações clínicas alteradas e mídias de pacientes publicadas
  possuem aprovação registrada e o aviso de variação individual aplicável.
- **SC-009**: As rotas institucionais existentes continuam acessíveis e sem regressão
  funcional após a entrega.

## Scope

### In Scope

- Jornada mobile da rota de otomodelação.
- Primeira dobra, navegação de campanha e transferência do CTA entre hero e cabeçalho.
- Apresentação dos resultados existentes e sinais de confiança disponíveis.
- Revisão do texto diretamente afetado pela jornada de conversão.
- Unificação e validação da mensuração já utilizada pelo projeto.
- Validação mobile, acessibilidade, performance e não regressão das demais rotas.

### Out of Scope

- Redesign completo do site institucional ou de outras páginas de procedimento.
- Criação de nova identidade visual.
- Produção de novas fotos, depoimentos ou casos clínicos.
- Formulário próprio, agenda online, CRM ou automação de atendimento.
- Adoção de novos mecanismos de mensuração além dos já utilizados nesta primeira entrega.
- Mudanças em campanhas, públicos, criativos ou orçamento dentro da plataforma Meta.

## Assumptions

- O principal objetivo da landing page continua sendo iniciar contato pelo WhatsApp.
- A maior parte do tráfego da campanha continuará vindo de celulares.
- O número, a mensagem base e os canais de mensuração atualmente aprovados continuarão
  disponíveis durante a implementação.
- Credenciais profissionais e imagens existentes somente serão mantidas quando sua
  verificação ou autorização puder ser confirmada.
- O restante do site institucional deve permanecer funcional, embora a rota de campanha
  possa ter navegação mais restrita.
- A implementação pode ser demonstrada antes do teste moderado, mas a feature não pode
  receber aceite final nem ser considerada pronta para publicação até que cinco
  participantes representativos validem SC-002 e SC-003.
- A implementação pode ser publicada tecnicamente após cumprir os budgets de laboratório,
  mas o aceite final de SC-006 permanece pendente até completar a janela de 28 dias de
  dados de campo.

## Dependencies

- Aprovação da Dra. Katia Amaral para textos clínicos, credenciais e mídias de pacientes.
- Acesso de validação aos destinos ativos de GA4, Google Ads e Meta.
- Manutenção do número oficial de WhatsApp e da mensagem aprovada para a campanha.
- Existência de uma fonte válida de consentimento, com responsável identificado, antes da
  ativação de armazenamento ou tags de analytics e publicidade; criar uma nova interface
  de consentimento permanece fora do escopo desta entrega.
