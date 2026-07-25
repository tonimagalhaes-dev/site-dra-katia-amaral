# Contract: Analytics Events v1

## Aplicação → camada central

### `whatsapp_contact`

```json
{
  "event": "whatsapp_contact",
  "schema_version": 1,
  "event_id": "uuid",
  "cta_position": "hero",
  "page_path": "/otomodelacao",
  "campaign": {
    "utm_source": "meta",
    "utm_medium": "paid_social",
    "utm_campaign": "campanha-permitida"
  }
}
```

`cta_position` aceita `header`, `hero`, `results`, `persistent` ou `final`.
`campaign` é opcional e contém apenas os campos allowlisted do modelo. O evento não pode
conter mensagem do WhatsApp, telefone, nome, e-mail, interesse clínico, query completa ou
referrer.

Garantias:
- exatamente um push por ação após a guarda de 750 ms;
- `event_id` novo em cada ação deliberada;
- `dataLayer` ausente é criado; exceções são absorvidas;
- o handler não cancela nem aguarda o link.

### `virtual_page_view`

```json
{
  "event": "virtual_page_view",
  "schema_version": 1,
  "event_id": "uuid",
  "page_path": "/otomodelacao",
  "page_title": "Otomodelação | Dra. Katia Amaral"
}
```

Garantias: um push por navegação confirmada, pathname sem query e sem duplicação pelo
StrictMode.

## Camada central → fornecedores

| Evento da aplicação | Destino | Evento/tag | Parâmetros |
|---|---|---|---|
| `whatsapp_contact` | GA4 | `whatsapp_click` | `event_id`, `cta_position`, campanha permitida |
| `whatsapp_contact` | Google Ads | conversion `AW-17354756555/Zd1wCK78jocbEMujstNA` | `event_id`, `cta_position` |
| `whatsapp_contact` | Meta | `Contact` | `eventID=event_id`, `cta_position` |
| `virtual_page_view` | GA4 | `page_view` | `event_id`, `page_path`, `page_title` |
| `virtual_page_view` | Meta | `PageView` | `eventID=event_id`, `page_path` |

Não existem triggers GTM ou tags paralelas. O Google tag usa `send_page_view: false`.
Consent Mode inicia `analytics_storage`, `ad_storage`,
`ad_user_data` e `ad_personalization` como `denied` até sinal válido proveniente de uma
fonte documentada. Sem essa fonte, as tags permanecem negadas e o release não recebe
aceite final.

## Aceitação do contrato

- GA4 DebugView, Tag Assistant/Ads e Meta Test Events confirmam um evento por ação.
- Todos os destinos recebem o mesmo `event_id` e posição.
- Bloqueio de GTM/fornecedor não impede o destino `wa.me`.
- A fonte de consentimento, o responsável e a transição para `granted` estão registrados.
