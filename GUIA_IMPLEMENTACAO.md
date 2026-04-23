# 📋 Guia de Implementação - Padronização de Analytics

## Status: Arquivos Criados

Os seguintes arquivos já foram criados como base para a implementação:

### ✅ Arquivos Criados

1. **`src/services/analyticsService.ts`**
   - Serviço centralizado de analytics
   - Interface `IAnalyticsService`
   - Implementação `GoogleAnalyticsService`
   - Singleton export `analyticsService`

2. **`src/hooks/useAnalytics.ts`**
   - Hook customizado `useAnalytics()`
   - Métodos: `trackWhatsAppClick`, `trackWhatsAppClickAdvanced`, `trackWhatsAppConversion`
   - Otimizado com `useCallback` para performance

### 📄 Documentação Criada

1. **`ANALISE_TRACKING_PADRONIZACAO.md`**
   - Diagnóstico completo das inconsistências
   - Aplicação de princípios SOLID
   - Arquitetura proposta

2. **`EXEMPLOS_REFATORACAO.md`**
   - Exemplos antes/depois para cada componente
   - 6 componentes principais refatorados
   - Tabela de impacto

---

## 🚀 Próximos Passos: Implementação

### **PASSO 1: Verificar os arquivos criados**

Execute no terminal:
```bash
ls -la src/services/
ls -la src/hooks/useAnalytics.ts
```

Você deverá ver:
- ✅ `src/services/analyticsService.ts` (novo)
- ✅ `src/hooks/useAnalytics.ts` (novo)

---

### **PASSO 2: Refatorar Header.tsx**

Edite o arquivo `src/components/Header.tsx`:

**Mudanças:**
1. Add import:
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';
```

2. No componente, adicione logo após `const location = useLocation();`:
```tsx
const { trackWhatsAppClick } = useAnalytics();
```


3. Substitua o `handleWhatsAppClick` de ~7 linhas por:
```tsx
const handleWhatsAppClick = () => {
  trackWhatsAppClick('header');
  window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
};
```

---

### **PASSO 3: Refatorar Footer.tsx**

Edite `src/components/Footer.tsx`:

**Mudanças:**
1. Add import:
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';
```

2. No componente, após `const Footer = () => {`:
```tsx
const { trackWhatsAppClick } = useAnalytics();
```

3. Substitua o `handleWhatsAppClick` de ~9 linhas por:
```tsx
const handleWhatsAppClick = () => {
  trackWhatsAppClick('footer');
  window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
};
```

---

### **PASSO 4: Refatorar Index.tsx**

Edite `src/pages/Index.tsx`:

**Mudanças:**
1. Add import no topo:
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';
```

2. No componente, após `const handleWhatsAppClick = () => {`:
```tsx
const { trackWhatsAppClick } = useAnalytics();

const handleWhatsAppClick = () => {
  trackWhatsAppClick('index');
  window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
};
```

---

### **PASSO 5: Refatorar ContactForm.tsx**

Edite `src/components/ContactForm.tsx`:

**Mudanças:**
1. Add import:
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';
```

2. No componente:
```tsx
const { trackWhatsAppClick } = useAnalytics();
```

3. No método `handleSubmit`, substitua a seção de GA4 event (linhas ~51-59):

**De:**
```tsx
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
```

**Para:**
```tsx
const whatsappUrl = createWhatsAppUrl(message);

trackWhatsAppClick('form', formData.procedimento);
window.open(whatsappUrl, '_blank');
```

---

### **PASSO 6: Refatorar ProcedurePage.tsx**

Edite `src/components/ProcedurePage.tsx`:

**Mudanças:**
1. Add import após outros imports:
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';
```

2. Dentro do componente, após `useEffect`, adicione:
```tsx
const { trackWhatsAppClick } = useAnalytics();
```

3. Substitua a função `handleWhatsAppClick` (linhas ~47-53):

**De:**
```tsx
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
```

**Para:**
```tsx
const handleWhatsAppClick = () => {
  trackWhatsAppClick('procedure-page', procedureName);
  const message = `Olá! Gostaria de saber mais sobre ${procedureName}...`;
  window.open(`https://wa.me/5511942242893?text=${encodeURIComponent(message)}`, '_blank');
};
```

---

### **PASSO 7: Refatorar App.tsx**

Edite `src/App.tsx`:

**Mudanças:**
1. Add import:
```tsx
import { useAnalytics } from './hooks/useAnalytics';
```

2. Remova ou comente:
```tsx
// import { reportWhatsappConversion } from './analytics/analytics';
```

3. No componente `function App()`, adicione após o `Router`:

**De:**
```tsx
function App() {
  const handleWhatsAppClick = () => {
    const message = 'Olá, Dra. Kátia! Vi o site e gostaria de saber mais sobre a otomodelação. Podemos conversar?';
    const whatsappUrl = createWhatsAppUrl(message);
    reportWhatsappConversion(whatsappUrl);
  };
```

**Para:**
```tsx
function App() {
  const { trackWhatsAppConversion } = useAnalytics();

  const handleWhatsAppClick = () => {
    const message = 'Olá, Dra. Kátia! Vi o site e gostaria de saber mais. Podemos conversar?';
    const whatsappUrl = createWhatsAppUrl(message);
    trackWhatsAppConversion(whatsappUrl);
  };
```

---

### **PASSO 8: Refatorar Otomodelacao.tsx**

Edite `src/pages/Otomodelacao.tsx`:

**Mudanças:**
1. Add import:
```tsx
import { useAnalytics } from '@/hooks/useAnalytics';
```

2. No componente, após `useEffect`, adicione:
```tsx
const { trackWhatsAppClick } = useAnalytics();
```

3. Substitua `handleWhatsAppClick`:

**De:**
```tsx
const handleWhatsAppClick = () => {
  // GA4 event
  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'Header',
    });
  }
  window.open(createWhatsAppUrl(otomodelacaoMessage), '_blank');
};
```

**Para:**
```tsx
const handleWhatsAppClick = () => {
  trackWhatsAppClick('procedure-page', 'otomodelacao');
  window.open(createWhatsAppUrl(otomodelacaoMessage), '_blank');
};
```

---

## ✅ Checklist de Implementação

- [ ] Header.tsx refatorado
- [ ] Footer.tsx refatorado
- [ ] Index.tsx refatorado
- [ ] ContactForm.tsx refatorado
- [ ] ProcedurePage.tsx refatorado
- [ ] App.tsx refatorado
- [ ] Otomodelacao.tsx refatorado

### Outras páginas (opcional, mas recomendado)
- [ ] Sobre.tsx
- [ ] Contato.tsx
- [ ] BioestimuladorColageno.tsx
- [ ] EmpetiersMesoterapia.tsx
- [ ] Escleroterapia.tsx
- [ ] HarmonizacaoCorporal.tsx
- [ ] HarmonizacaoFacial.tsx
- [ ] HarmonizacaoGlutea.tsx
- [ ] JatoDePlasma.tsx
- [ ] Micropigmentacao.tsx
- [ ] Ozonioterapia.tsx
- [ ] PreenchimentoLabial.tsx
- [ ] Skinbooster.tsx
- [ ] TerapiaCapilar.tsx

---

## 🧪 Testes

### 1. **Teste Local**
```bash
npm run dev
```

1. Abra o console (F12)
2. Clique em um botão WhatsApp
3. Verifique se não há erros no console
4. Verifique se a janela do WhatsApp abre

### 2. **Teste no Google Analytics**

1. Vá para [Google Analytics 4](https://analytics.google.com)
2. Navegue para **Realtime** (Tempo Real)
3. Clique em um botão WhatsApp no site
4. Você deverá ver um evento `whatsapp_click` aparecer em tempo real

### 3. **Validar Estrutura do Evento**

No GA4, vá para **DebugView** ou **Events** e verifique:

- ✅ Event name: `whatsapp_click`
- ✅ event_category: `engagement`
- ✅ event_label: `whatsapp_click_header` (ou footer, form, etc)
- ✅ event_source: `header` (ou footer, form, etc)
- ✅ value: `1`
- ✅ page_path: `/caminho/da/pagina`
- ✅ procedure_name: (quando aplicável)

---

## 📊 Relatórios Recomendados no GA4

Depois da implementação, crie estes relatórios:

### 1. **Cliques por Origem**
- Dimensão: `event_source`
- Métrica: `event_count`
- Filtro: `event_name = whatsapp_click`

### 2. **Cliques por Procedimento**
- Dimensão: `procedure_name`
- Métrica: `event_count`
- Filtro: `event_name = whatsapp_click`

### 3. **Taxa de Conversão por Página**
- Dimensão: `page_path`
- Métrica: `event_count`
- Filtro: `event_name = whatsapp_click`

---

## 🔄 Próximas Melhorias (Fase 2)

Após a implementação bem-sucedida:

1. **Mock do serviço para testes unitários**
   ```typescript
   jest.mock('@/services/analyticsService');
   ```

2. **Adicionar tracking de outras ações**
   - Cliques em Instagram
   - Preenchimento de formulário
   - Visualizações de procedimentos

3. **Integração com Mixpanel ou Segment**
   - Estender `IAnalyticsService`
   - Suportar múltiplos provedores

4. **Dashboard customizado**
   - Visualizar dados em tempo real
   - Alertas de anomalias

---

## ❓ FAQ

**P: E se o `window.gtag` não estiver disponível?**
R: O serviço verifica com `isAvailable()` e simplesmente não envia o evento. O link do WhatsApp ainda abre normalmente.

**P: Posso usar diferentes mensagens por origem?**
R: Sim! Passe parametros adicionais para `trackWhatsAppClick()` conforme necessário.

**P: Como testo sem conectar ao GA real?**
R: Em desenvolvimento, o `isAvailable()` retornará false se o script do GA não estiver carregado.

**P: Preciso atualizar todas as páginas de procedimentos?**
R: Recomendado, mas não obrigatório. Priorize as com mais tráfego primeiro.

---

## 📞 Suporte

Se tiver dúvidas durante a implementação:

1. Verificar se os imports estão corretos
2. Verificar se o hook está sendo chamado dentro do componente
3. Abrir console (F12) para ver erros
4. Verificar a estrutura do arquivo analytics em `src/services/analyticsService.ts`

---

## 🎉 Após Completar

Após toda a refatoração:

1. **Commit no Git**
   ```bash
   git add .
   git commit -m "refactor: standardize whatsapp analytics tracking with SOLID principles"
   ```

2. **Fazer PR para revisão**

3. **Testar em staging**

4. **Deploy em produção**

5. **Monitorar em GA4 por 24h**

---

**Tempo estimado total:** 2-3 horas
**Complexidade:** Baixa-Média
**Risco:** Muito Baixo (apenas código frontend, sem backend)
