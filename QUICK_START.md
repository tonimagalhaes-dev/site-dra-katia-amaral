# ⚡ Quick Start - Checklist de Refatoração

## 📋 Antes de Começar

- [ ] Todos os arquivos criados existem?
  ```bash
  ls -la src/services/analyticsService.ts
  ls -la src/hooks/useAnalytics.ts
  ```

- [ ] Leu a documentação?
  - [ ] RESUMO_EXECUTIVO.md
  - [ ] GUIA_IMPLEMENTACAO.md
  - [ ] EXEMPLOS_REFATORACAO.md

---

## 🎯 Refatoração - Componentes

### 1️⃣ Header.tsx ⏱️ 5 min

**Arquivo:** `src/components/Header.tsx`

**Checklist:**
- [ ] Add import: `import { useAnalytics } from '@/hooks/useAnalytics';`
- [ ] Add hook: `const { trackWhatsAppClick } = useAnalytics();`
- [ ] Substituir `handleWhatsAppClick` (remover 6 linhas, adicionar 1)
- [ ] Testar: clique deve abrir WhatsApp

**Antes:**
```tsx
if (window.gtag) {
  window.gtag('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: 'Header',
  });
}
```

**Depois:**
```tsx
trackWhatsAppClick('header');
```

---

### 2️⃣ Footer.tsx ⏱️ 5 min

**Arquivo:** `src/components/Footer.tsx`

**Checklist:**
- [ ] Add import
- [ ] Add hook
- [ ] Substituir `handleWhatsAppClick` (remove 7 lines)
- [ ] Testar

**Mudança:** Similar ao Header.tsx

---

### 3️⃣ Index.tsx ⏱️ 5 min

**Arquivo:** `src/pages/Index.tsx`

**Checklist:**
- [ ] Add import
- [ ] Add hook
- [ ] Substituir `handleWhatsAppClick`
- [ ] Change: `trackWhatsAppClick('index')`
- [ ] Testar

---

### 4️⃣ ContactForm.tsx ⏱️ 10 min

**Arquivo:** `src/components/ContactForm.tsx`

**Checklist:**
- [ ] Add import
- [ ] Add hook
- [ ] No método `handleSubmit`, localizar bloco GA4
- [ ] Substituir bloco inteiro de ~9 linhas por:
  ```tsx
  trackWhatsAppClick('form', formData.procedimento);
  window.open(whatsappUrl, '_blank');
  ```
- [ ] Testar form submission

---

### 5️⃣ ProcedurePage.tsx ⏱️ 10 min

**Arquivo:** `src/components/ProcedurePage.tsx`

**Checklist:**
- [ ] Add import
- [ ] Add hook após `useEffect`
- [ ] Substituir `handleWhatsAppClick`
- [ ] Change: `trackWhatsAppClick('procedure-page', procedureName);`
- [ ] Testar em página de procedimento

---

### 6️⃣ App.tsx ⏱️ 5 min

**Arquivo:** `src/App.tsx`

**Checklist:**
- [ ] Add import: `import { useAnalytics } from './hooks/useAnalytics';`
- [ ] Remove ou comment: `import { reportWhatsappConversion } from './analytics/analytics';`
- [ ] Add hook: `const { trackWhatsAppConversion } = useAnalytics();`
- [ ] Change: `trackWhatsAppConversion(whatsappUrl);` (em vez de `reportWhatsappConversion`)
- [ ] Testar floating button

---

### 7️⃣ Otomodelacao.tsx ⏱️ 5 min

**Arquivo:** `src/pages/Otomodelacao.tsx`

**Checklist:**
- [ ] Add import
- [ ] Add hook
- [ ] Substituir `handleWhatsAppClick`
- [ ] Change: `trackWhatsAppClick('procedure-page', 'otomodelacao');`
- [ ] Testar

---

## 🔍 Testes Rápidos

### Teste 1: Verificar Imports
```bash
grep -r "useAnalytics" src/components/
grep -r "useAnalytics" src/pages/
grep -r "analyticsService" src/
```

Você deve ver:
- ✅ 7 componentes importando `useAnalytics`
- ✅ 1 arquivo com `analyticsService` (src/services/)

### Teste 2: Remover Código Antigo
```bash
grep -r "window.gtag.*whatsapp_click" src/
```

Você deve ver:
- ✅ 0 resultados (todos removidos)

### Teste 3: Verificar Hook Usage
```bash
grep -r "trackWhatsAppClick" src/
```

Você deve ver:
- ✅ 7+ resultados em componentes
- ✅ 1 no arquivo de hook
- ✅ 1 no serviço

---

## 🧪 Teste no Browser

### Passo 1: Build Local
```bash
npm run dev
```

### Passo 2: Testar Cliques
- [ ] Clique Header WhatsApp → Abre WhatsApp
- [ ] Clique Footer WhatsApp → Abre WhatsApp
- [ ] Clique Index WhatsApp → Abre WhatsApp
- [ ] Clique Form → Abre WhatsApp
- [ ] Clique ProcedurePage → Abre WhatsApp
- [ ] Clique Floating Button → Abre WhatsApp

### Passo 3: Verificar Console
```bash
F12 → Console
Verificar se não há erros vermelhos
```

---

## 📊 Validar no Google Analytics

### 1. Real-time View
1. Abra Google Analytics 4
2. Clique em **Realtime**
3. Clique um botão WhatsApp no site
4. Deve aparecer evento `whatsapp_click` em tempo real

### 2. Verificar Estrutura do Evento
Evento deve ter campos:
- ✅ `event_category: engagement`
- ✅ `event_label: whatsapp_click_header` (ou footer, form, etc)
- ✅ `event_source: header` (ou footer, form, etc)
- ✅ `value: 1`
- ✅ `page_path: /caminho/da/pagina`
- ✅ `procedure_name: otomodelacao` (quando aplicável)

### 3. Teste de Conversão (Google Ads)
1. Clique em botão WhatsApp
2. Verificar se evento de conversão é registrado
3. Checar em Google Ads → Conversions

---

## ✅ Checklist Final

### Código
- [ ] Todos os 7 componentes refatorados
- [ ] Sem `window.gtag` direto nos componentes
- [ ] Todos usando `useAnalytics` hook
- [ ] Sem erros TypeScript (`npm run build`)

### Testes
- [ ] Todos os cliques abrem WhatsApp
- [ ] Sem erros no console
- [ ] Eventos aparecem no GA4 em tempo real
- [ ] Estrutura do evento está correta

### Documentação
- [ ] Código comentado onde necessário
- [ ] Commits com mensagens claras

### Deploy
- [ ] Testar em staging
- [ ] Monitor GA4 por 24h
- [ ] Deploy em produção
- [ ] Criar relatórios customizados

---

## 📈 Próximas Páginas (Opcional)

Se quiser padronizar TODAS as páginas de procedimentos:

```
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
- [ ] Sobre.tsx
- [ ] Contato.tsx
```

**Padrão:** Mesma mudança do Otomodelacao.tsx
**Tempo:** ~2 minutos por arquivo

---

## 🆘 Troubleshooting

### ❌ Erro: "useAnalytics is not defined"
```
Solução: Verificar import
✅ import { useAnalytics } from '@/hooks/useAnalytics';
```

### ❌ Erro: "Cannot read property 'trackWhatsAppClick' of undefined"
```
Solução: Hook não está sendo chamado dentro do componente
✅ const { trackWhatsAppClick } = useAnalytics();
```

### ❌ WhatsApp não abre
```
Solução: Verificar se está chamando window.open()
✅ trackWhatsAppClick('source');  // Track
   window.open(url, '_blank');     // Open
```

### ❌ Eventos não aparecem no GA4
```
Solução: 
1. Verificar se gtag está carregado (F12 > Console > window.gtag)
2. Verificar se ID está correto (GA_TRACKING_ID)
3. Esperar 30-60 segundos no Real-time
4. Limpar cache (Ctrl+F5)
```

---

## ⏱️ Tempo Estimado

| Componente | Tempo | Status |
|-----------|-------|--------|
| Header.tsx | 5 min | [ ] |
| Footer.tsx | 5 min | [ ] |
| Index.tsx | 5 min | [ ] |
| ContactForm.tsx | 10 min | [ ] |
| ProcedurePage.tsx | 10 min | [ ] |
| App.tsx | 5 min | [ ] |
| Otomodelacao.tsx | 5 min | [ ] |
| **Testes** | 15 min | [ ] |
| **TOTAL** | **60 min** | |

---

## 🎉 Quando Terminar

1. ✅ Fazer commit
   ```bash
   git add .
   git commit -m "refactor: standardize whatsapp analytics with SOLID principles"
   ```

2. ✅ Fazer PR
   ```bash
   git push origin seu-branch
   # Criar PR no GitHub
   ```

3. ✅ Testar em staging

4. ✅ Deploy em produção

5. ✅ Monitor 24h

6. ✅ Criar relatórios customizados no GA4

---

**Status:** Pronto para começar! 🚀  
**Tempo total:** ~1 hora  
**Complexidade:** Baixa  
**Risco:** Muito Baixo
