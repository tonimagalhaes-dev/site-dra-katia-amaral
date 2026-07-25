# Data Model: Jornada Mobile de Conversão

## CTA de Conversão

```ts
type CtaPosition = "header" | "hero" | "results" | "persistent" | "final";

interface ConversionCta {
  position: CtaPosition;
  label: string;
  href: string;
  messageContext: "otomodelacao";
  persistent: boolean;
}
```

Regras:
- todas as posições usam o mesmo número e mensagem aprovada;
- `href` deve funcionar sem JavaScript;
- o texto pode quebrar, sem ultrapassar o viewport, e o alvo mede ao menos 44x44 px;
- uma ação deliberada cria um único `event_id`.

## Atribuição de Campanha

```ts
interface CampaignAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
}
```

Regras:
- captura first-touch por sessão, sem sobrescrever valores existentes;
- valores sanitizados e limitados a 100 caracteres;
- falha de storage não afeta a navegação;
- são proibidos query completa, referrer, mensagem, telefone, nome e dado de saúde.

## Interação de Conversão

```ts
interface WhatsAppContactEvent {
  event: "whatsapp_contact";
  schema_version: 1;
  event_id: string;
  cta_position: CtaPosition;
  page_path: "/otomodelacao";
  campaign?: CampaignAttribution;
}
```

Transição: `idle -> activated -> event pushed + native navigation`. Analytics pode falhar;
a navegação não depende do estado do evento. Toques repetidos no mesmo CTA em até 750 ms
são uma única ativação; uma ação deliberada posterior recebe novo `event_id`.

## Visualização de Rota

```ts
interface VirtualPageViewEvent {
  event: "virtual_page_view";
  schema_version: 1;
  event_id: string;
  page_path: string;
  page_title: string;
}
```

Regras:
- um evento por `pathname`/navegação confirmada;
- não inclui query arbitrária;
- remount de StrictMode não cria uma segunda visualização.

## Caso de Resultado

```ts
type AuthorizationStatus = "approved" | "pending" | "rejected";

interface ResultView {
  id: string;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ResultCase {
  id: string;
  patientLabel: string;
  views: ResultView[];
  authorizationStatus: AuthorizationStatus;
}
```

Regras:
- somente `approved` pode ser publicado;
- as vistas pertencem ao mesmo paciente e têm nomes confirmados;
- dimensões reservam espaço antes do carregamento;
- erro mantém caso, rótulo e contexto;
- ordem é estável e produz “Caso X de N”.

## Estado da Galeria

```ts
interface ResultsCarouselState {
  activeIndex: number;
  total: number;
  canScrollPrevious: boolean;
  canScrollNext: boolean;
}
```

Invariantes: `0 <= activeIndex < total`; sem loop; com um caso, controles ficam
indisponíveis e o estado continua compreensível.

## Evidência de Aprovação

```ts
interface PublicationApproval {
  subjectType: "clinical-copy" | "credential" | "patient-media";
  subjectId: string;
  approvedBy: string;
  approvedAt: string;
  evidenceLocation: string;
}
```

O registro vive no processo de release, não no bundle público. Nenhum item pendente pode
ser considerado pronto para publicação.
