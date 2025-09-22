# Lead Landing Pages Pro

Este é o projeto do site que desenvolvi para a Dra. Katia Amaral, minha esposa, para ajudá-la a capturar leads para seu trabalho como esteticista. O site apresenta os procedimentos que ela oferece, informações sobre sua carreira e formas de contato.

## Arquitetura e Estrutura de Pastas

O projeto utiliza uma arquitetura baseada em componentes, facilitando a manutenção e a adição de novas funcionalidades. A estrutura principal é:

/
├── public/                  # Arquivos estáticos
├── src/
│   ├── analytics/           # Configurações do Google Analytics
│   ├── components/
│   │   ├── ui/              # Componentes de UI (shadcn/ui)
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ProcedurePage.tsx
│   ├── hooks/               # Hooks customizados
│   ├── lib/                 # Funções utilitárias
│   ├── pages/               # Páginas do site
│   ├── App.tsx              # Componente principal e rotas
│   ├── index.css            # Estilos globais
│   └── main.tsx             # Ponto de entrada
├── .github/workflows/       # Workflows de CI/CD
├── package.json
├── tailwind.config.ts
└── vite.config.ts

## Tecnologias Utilizadas

- **Framework**: React
- **Build Tool**: Vite
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes de UI**: shadcn/ui
- **Roteamento**: React Router DOM
- **Linting**: ESLint e Prettier
- **CI/CD**: GitHub Actions

## Como Iniciar

1.  **Clone o repositório:**
    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd lead-landing-pages-pro
    ```

2.  **Instale as dependências:**
    ```sh
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:8080`.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção.
- `npm run lint`: Executa o ESLint.
- `npm run preview`: Visualiza a versão de produção.
- `npm run format`: Formata o código com o Prettier.