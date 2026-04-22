# Análise e Proposta de Padronização de Tracking Google Analytics

## 📊 Diagnóstico - Inconsistências Encontradas

### 1. **Chamadas de Tracking Não Padronizadas**

Localizadas múltiplas formas de disparar o mesmo evento `whatsapp_click`:

#### Padrão 1: Chamadas diretas ao window.gtag (Maioria dos casos)
**Header.tsx**, **Footer.tsx**, **Index.tsx**, **ContactForm.tsx**, **ProcedurePage.tsx**, **Otomodelacao.tsx**
```tsx
if (window.gtag) {
  window.gtag('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: window.location.pathname,  // ou 'Header'
    value: 1,  // nem sempre presente
  });
}
```

#### Padrão 2: Função especializada (apenas App.tsx)
```tsx
reportWhatsappConversion(whatsappUrl);  // Função que existe mas não é usada em todos os lugares
```

### 2. **Problemas Identificados**

| Problema | Impacto | Exemplo |
|----------|--------|---------|
| **Inconsistência no `event_label`** | Dados fragmentados no GA | Header.tsx usa `'Header'`, Footer.tsx usa `window.location.pathname` |
| **Ausência de `value` em alguns casos** | Métricas incompletas | Header.tsx não envia `value: 1` |
| **Duplicação de código** | Difícil manutenção | Mesmo código repetido em 6+ componentes |
| **Falta de abstração** | Acoplamento alto | Componentes dependem diretamente do `window.gtag` |
| **Sem contexto claro** | Análise confusa | Não há forma de saber qual é a "origem" do clique |
| **Dois padrões coexistindo** | Confusão para novos desenvolvedores | Alguns usam `reportWhatsappConversion`, outros não |

---

## 🏗️ Aplicação de Conceitos SOLID

### **S - Single Responsibility Principle (SRP)**
- ❌ **Problema**: Componentes têm duas responsabilidades: renderizar UI + disparar eventos analytics
- ✅ **Solução**: Criar um serviço dedicado para tracking de eventos

### **O - Open/Closed Principle (OCP)**
- ❌ **Problema**: Para adicionar novo evento, precisa-se modificar múltiplos componentes
- ✅ **Solução**: Serviço centralizado que está aberto para extensão (novos eventos), mas fechado para modificação

### **D - Dependency Inversion Principle (DIP)**
- ❌ **Problema**: Componentes dependem diretamente de `window.gtag` (implementação concreta)
- ✅ **Solução**: Componentes dependem de abstração (interface/serviço)

---

## ✨ Solução Proposta

### 1. **Criar serviço centralizado de Analytics com tipos bem definidos**

```typescript
// src/services/analyticsService.ts

export interface AnalyticsEvent {
  eventName: string;
  category: string;
  label: string;
  source?: string;  // NEW: Para rastrear origem (Header, Footer, etc)
  value?: number;
  customParams?: Record<string, unknown>;
}

export interface AnalyticsService {
  trackWhatsAppClick(params: {
    source: string;  // OBRIGATÓRIO: 'header' | 'footer' | 'form' | 'procedure' | 'floating-button'
    procedureName?: string;
    label?: string;
  }): void;
  
  trackEvent(event: AnalyticsEvent): void;
  trackConversion(whatsappUrl: string): void;
}

class GoogleAnalyticsService implements AnalyticsService {
  private readonly GA_ID = 'G-926CE4V53N';
  private readonly ADS_CONVERSION_ID = 'AW-17354756555/Zd1wCK78jocbEMujstNA';

  private isAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
  }

  trackWhatsAppClick(params: {
    source: string;
    procedureName?: string;
    label?: string;
  }): void {
    if (!this.isAvailable()) return;

    const eventLabel = params.label || `whatsapp_click_${params.source}`;
    
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: eventLabel,
      event_source: params.source,  // NEW: Campo customizado para origem
      procedure_name: params.procedureName,  // NEW: Se aplicável
      value: 1,
      page_path: window.location.pathname,  // CONSISTENTE: Sempre enviar
    });
  }

  trackEvent(event: AnalyticsEvent): void {
    if (!this.isAvailable()) return;

    window.gtag('event', event.eventName, {
      event_category: event.category,
      event_label: event.label,
      event_source: event.source,
      value: event.value,
      ...event.customParams,
    });
  }

  trackConversion(whatsappUrl: string): void {
    const callback = () => window.open(whatsappUrl, '_blank');

    if (this.isAvailable()) {
      window.gtag('event', 'conversion', {
        send_to: this.ADS_CONVERSION_ID,
        event_callback: callback,
      });
    } else {
      callback();
    }
  }
}

// Singleton
export const analyticsService = new GoogleAnalyticsService();
```

### 2. **Hook customizado para usar em componentes**

```typescript
// src/hooks/useAnalytics.ts

import { analyticsService } from '@/services/analyticsService';

export const useAnalytics = () => {
  return {
    trackWhatsAppClick: (source: string, procedureName?: string) => {
      analyticsService.trackWhatsAppClick({
        source,
        procedureName,
      });
    },
  };
};
```

### 3. **Refatorar componentes para usar o novo padrão**

**Antes (Header.tsx):**
```tsx
const handleWhatsAppClick = () => {
  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'Header',
    });
  }
  window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
};
```

**Depois (Header.tsx):**
```tsx
const { trackWhatsAppClick } = useAnalytics();

const handleWhatsAppClick = () => {
  trackWhatsAppClick('header');
  window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
};
```

**Antes (ProcedurePage.tsx):**
```tsx
const handleWhatsAppClick = () => {
  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: window.location.pathname,
      value: 1,
    });
  }
  const message = `Olá! Gostaria de saber mais sobre ${procedureName}...`;
  window.open(`https://wa.me/5511942242893?text=${encodeURIComponent(message)}`, '_blank');
};
```

**Depois (ProcedurePage.tsx):**
```tsx
const { trackWhatsAppClick } = useAnalytics();

const handleWhatsAppClick = () => {
  trackWhatsAppClick('procedure-page', procedureName);
  const message = `Olá! Gostaria de saber mais sobre ${procedureName}...`;
  window.open(`https://wa.me/5511942242893?text=${encodeURIComponent(message)}`, '_blank');
};
```

---

## 📋 Estrutura de Dados Padronizada

Todos os eventos `whatsapp_click` devem ter:

```json
{
  "event_name": "whatsapp_click",
  "event_category": "engagement",
  "event_label": "whatsapp_click_{source}",
  "event_source": "header|footer|form|procedure-page|floating-button|index",
  "procedure_name": "otomodelacao|harmonizacao-facial|... (opcional)",
  "value": 1,
  "page_path": "/caminho/da/pagina"
}
```

---

## 🎯 Benefícios da Refatoração

| Princípio SOLID | Benefício |
|-----------------|-----------|
| **SRP** | Cada classe tem uma responsabilidade: UI ou Analytics |
| **OCP** | Adicionar novos eventos sem modificar componentes existentes |
| **DIP** | Componentes dependem de abstração, não implementação |
| **DRY** | Código não repetido, fácil manutenção |
| **Testabilidade** | Analytics pode ser mockado para testes |
| **Escalabilidade** | Fácil adicionar novos serviços (Mixpanel, Segment, etc) |

---

## 📝 Checklist de Implementação

- [ ] Criar `src/services/analyticsService.ts` com a interface e implementação
- [ ] Criar `src/hooks/useAnalytics.ts`
- [ ] Refatorar Header.tsx
- [ ] Refatorar Footer.tsx
- [ ] Refatorar Index.tsx
- [ ] Refatorar ContactForm.tsx
- [ ] Refatorar ProcedurePage.tsx
- [ ] Refatorar Otomodelacao.tsx e outras páginas de procedimentos
- [ ] Atualizar App.tsx para usar o novo padrão
- [ ] Testar eventos no Google Analytics

---

## 🚀 Próximas Melhorias (Futura)

1. Criar camada de abstração para suportar múltiplos provedores de analytics
2. Implementar retry logic para falhas de tracking
3. Adicionar validação de eventos com schema
4. Criar dashboard para monitorar eventos em tempo real
