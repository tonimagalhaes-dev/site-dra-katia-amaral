# Exemplos de Refatoração - Padrão Padronizado de Analytics

Este documento mostra como refatorar cada componente para usar o novo padrão de analytics centralizado.

---

## 1. Header.tsx

### ❌ Antes
```tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { createWhatsAppUrl } from '@/lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleWhatsAppClick = () => {
    // GA4 event
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'Header',
      });
    }
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  // ... resto do código
};
```

### ✅ Depois
```tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { createWhatsAppUrl } from '@/lib/constants';
import { useAnalytics } from '@/hooks/useAnalytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { trackWhatsAppClick } = useAnalytics();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('header');
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  // ... resto do código
};
```

**Benefícios:**
- ✅ Código mais limpo e legível
- ✅ Tracking centralizado
- ✅ Fácil de testar
- ✅ Sem acoplamento com `window.gtag`

---

## 2. Footer.tsx

### ❌ Antes
```tsx
import { Link } from 'react-router-dom';
import { MapPin, Instagram, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/constants';

const Footer = () => {
  const handleWhatsAppClick = () => {
    // GA4 event
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: window.location.pathname,
        value: 1,
      });
    }
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  const handleInstagramClick = () => {
    // GA4 event
    if (window.gtag) {
      window.gtag('event', 'instagram_click', {
        event_category: 'engagement',
        event_label: window.location.pathname,
        value: 1,
      });
    }
    window.open('https://instagram.com/drakatia.amaral', '_blank');
  };

  // ... resto do código
};
```

### ✅ Depois
```tsx
import { Link } from 'react-router-dom';
import { MapPin, Instagram, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/constants';
import { useAnalytics } from '@/hooks/useAnalytics';

const Footer = () => {
  const { trackWhatsAppClick } = useAnalytics();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('footer');
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/drakatia.amaral', '_blank');
  };

  // ... resto do código
};
```

**Notas:**
- `handleInstagramClick` não precisa de tracking no novo padrão (escopo do WhatsApp)
- Código reduzido de ~18 linhas para ~8 linhas

---

## 3. Index.tsx

### ❌ Antes
```tsx
const Index = () => {
  const handleWhatsAppClick = () => {
    // GA4 event
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: window.location.pathname,
        value: 1,
      });
    }
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  return (
    <div>
      {/* ... */}
      <Button onClick={handleWhatsAppClick} size="lg">
        Conversar no WhatsApp
      </Button>
    </div>
  );
};
```

### ✅ Depois
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

const Index = () => {
  const { trackWhatsAppClick } = useAnalytics();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('index');
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  return (
    <div>
      {/* ... */}
      <Button onClick={handleWhatsAppClick} size="lg">
        Conversar no WhatsApp
      </Button>
    </div>
  );
};
```

---

## 4. ContactForm.tsx

### ❌ Antes
```tsx
const ContactForm = ({ defaultProcedure, title, description }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    procedimento: defaultProcedure || ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.celular) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e celular.",
        variant: "destructive"
      });
      return;
    }

    const message = `Olá! Gostaria de agendar uma avaliação.
    
Nome: ${formData.nome}
Celular: ${formData.celular}
Procedimento de interesse: ${formData.procedimento}`;

    const whatsappUrl = createWhatsAppUrl(message);
    
    // GA4 event
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: window.location.pathname,
        value: 1,
      });
    }
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp para continuar o atendimento.",
    });
  };

  // ... resto do código
};
```

### ✅ Depois
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

const ContactForm = ({ defaultProcedure, title, description }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    procedimento: defaultProcedure || ''
  });
  const { toast } = useToast();
  const { trackWhatsAppClick } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.celular) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e celular.",
        variant: "destructive"
      });
      return;
    }

    const message = `Olá! Gostaria de agendar uma avaliação.
    
Nome: ${formData.nome}
Celular: ${formData.celular}
Procedimento de interesse: ${formData.procedimento}`;

    const whatsappUrl = createWhatsAppUrl(message);
    
    trackWhatsAppClick('form', formData.procedimento);
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp para continuar o atendimento.",
    });
  };

  // ... resto do código
};
```

**Melhorias:**
- ✅ Tracking agora inclui `procedimento` como contexto
- ✅ Código 50% menos poluído
- ✅ Remoção da lógica de verificação de `window.gtag`

---

## 5. ProcedurePage.tsx

### ❌ Antes
```tsx
const ProcedurePage = ({
  title,
  description,
  emoji,
  procedureName,
  // ... outros props
}: ProcedurePageProps) => {
  const handleWhatsAppClick = () => {
    // GA4 event
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

  return (
    // ... JSX
    <Button onClick={handleWhatsAppClick}>
      Agendar Avaliação
    </Button>
  );
};
```

### ✅ Depois
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

const ProcedurePage = ({
  title,
  description,
  emoji,
  procedureName,
  // ... outros props
}: ProcedurePageProps) => {
  const { trackWhatsAppClick } = useAnalytics();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('procedure-page', procedureName);
    const message = `Olá! Gostaria de saber mais sobre ${procedureName}...`;
    window.open(`https://wa.me/5511942242893?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    // ... JSX
    <Button onClick={handleWhatsAppClick}>
      Agendar Avaliação
    </Button>
  );
};
```

**Benefícios:**
- ✅ Tracking inclui o nome do procedimento como contexto
- ✅ Possibilidade de filtrar eventos por procedimento no GA

---

## 6. App.tsx (Botão Flutuante)

### ❌ Antes
```tsx
import { reportWhatsappConversion } from './analytics/analytics';

function App() {
  const handleWhatsAppClick = () => {
    const message = 'Olá, Dra. Kátia! Vi o site e gostaria de saber mais sobre a otomodelação. Podemos conversar?';
    const whatsappUrl = createWhatsAppUrl(message);
    reportWhatsappConversion(whatsappUrl);
  };

  return (
    <Router>
      {/* ... */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-5 right-5 ..."
      >
        <img src="/images/wa-ico.png" alt="WhatsApp" />
        <span>Fale Conosco</span>
      </button>
    </Router>
  );
}
```

### ✅ Depois
```tsx
import { useAnalytics } from './hooks/useAnalytics';
import { createWhatsAppUrl } from './lib/constants';

function App() {
  const { trackWhatsAppConversion } = useAnalytics();

  const handleWhatsAppClick = () => {
    const message = 'Olá, Dra. Kátia! Vi o site e gostaria de saber mais. Podemos conversar?';
    const whatsappUrl = createWhatsAppUrl(message);
    trackWhatsAppConversion(whatsappUrl);
  };

  return (
    <Router>
      {/* ... */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-5 right-5 ..."
      >
        <img src="/images/wa-ico.png" alt="WhatsApp" />
        <span>Fale Conosco</span>
      </button>
    </Router>
  );
}
```

**Nota:** 
- A função `reportWhatsappConversion` agora é acessível pelo hook
- Mantém a integração com Google Ads

---

## 📊 Comparação de Impacto

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Linhas de tracking/componente | 5-7 | 1 | -85% |
| Componentes com dupl. código | 6+ | 0 | -100% |
| Pontos de manutenção | 6+ | 1 | -85% |
| Testabilidade | Baixa | Alta | +∞ |
| Reutilização | Baixa | Alta | +∞ |

---

## 🎯 Implementação Recomendada

### Fase 1: Setup (30 min)
1. Criar `src/services/analyticsService.ts` ✅
2. Criar `src/hooks/useAnalytics.ts` ✅
3. Testar localmente

### Fase 2: Refatoração (2-3 horas)
1. Header.tsx
2. Footer.tsx
3. Index.tsx
4. ContactForm.tsx
5. ProcedurePage.tsx
6. App.tsx
7. Otomodelacao.tsx e outras páginas

### Fase 3: Validação (1 hora)
1. Testar cliques de WhatsApp em várias páginas
2. Verificar eventos no Google Analytics
3. Validar dados no Google Ads

---

## 🔍 Verificação de Sucesso

No Google Analytics, você deverá ver eventos estruturados assim:

```
Event Name: whatsapp_click
Parameters:
  - event_category: engagement
  - event_label: whatsapp_click_header (ou footer, form, etc)
  - event_source: header (ou footer, form, etc)
  - procedure_name: otomodelacao (se aplicável)
  - page_path: /otomodelacao
  - value: 1
```

Isso permitirá filtrar e analisar:
- ✅ Qual página gera mais cliques
- ✅ Qual origem (header, footer, form) converte melhor
- ✅ Qual procedimento atrai mais cliques
- ✅ Taxa de conversão por origem
