Claro, aqui está uma documentação completa do projeto no formato `README.md`, com base na análise do código-fonte:

# Lead Landing Pages Pro

Este projeto é uma aplicação web desenvolvida para a Dra. Katia Amaral, especialista em estética avançada. O site serve como uma landing page para capturar leads, apresentando informações sobre os procedimentos estéticos oferecidos, detalhes sobre a profissional e canais de contato. A aplicação foi construída com foco em performance, componentização e uma arquitetura moderna utilizando React e Vite.

## Arquitetura e Estrutura de Pastas

O projeto segue uma arquitetura baseada em componentes, separando a aplicação em páginas, componentes reutilizáveis, hooks e utilitários, o que facilita a manutenção e escalabilidade.

```
/
├── public/                  # Arquivos estáticos (imagens, fontes, etc.)
├── src/
│   ├── analytics/           # Configurações de analytics (Google Analytics)
│   ├── components/
│   │   ├── ui/              # Componentes de UI (shadcn/ui)
│   │   ├── BeforeAfterSlider.tsx # Carrossel de antes e depois
│   │   ├── ContactForm.tsx  # Formulário de contato
│   │   ├── Footer.tsx       # Rodapé do site
│   │   ├── Header.tsx       # Cabeçalho do site
│   │   └── ProcedurePage.tsx# Template para páginas de procedimentos
│   ├── hooks/               # Hooks customizados (use-toast, use-mobile)
│   ├── lib/                 # Funções utilitárias e constantes
│   ├── pages/               # Componentes que representam as páginas do site
│   ├── App.tsx              # Componente principal e configuração de rotas
│   ├── index.css            # Estilos globais com Tailwind CSS
│   └── main.tsx             # Ponto de entrada da aplicação
├── .github/workflows/       # Workflows de CI/CD (lint)
├── package.json             # Dependências e scripts do projeto
├── tailwind.config.ts       # Configuração do Tailwind CSS
└── vite.config.ts           # Configuração do Vite
```

### Principais Componentes

  * **`App.tsx`**: Ponto central da aplicação, onde as rotas são definidas usando `react-router-dom`. Utiliza `React.lazy` para implementar code splitting, carregando cada página apenas quando necessário, o que melhora a performance inicial.
  * **`ProcedurePage.tsx`**: Um componente de template genérico utilizado para criar as diversas páginas de procedimentos. Ele recebe props como título, descrição, benefícios, etc., garantindo consistência visual e estrutural entre as páginas.
  * **`pages/`**: Cada arquivo nesta pasta representa uma rota da aplicação. A página `Index.tsx` é a home, `Otomodelacao.tsx` é uma página de procedimento específica, e assim por diante.
  * **`components/ui/`**: Contém os componentes de UI da biblioteca `shadcn/ui`, que são blocos de construção reutilizáveis para a interface do usuário, como botões, cards e formulários.

## Tecnologias Utilizadas

  * **Framework**: [React](https://react.dev/)
  * **Build Tool**: [Vite](https://vitejs.dev/)
  * **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
  * **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
  * **Componentes de UI**: [shadcn/ui](https://ui.shadcn.com/)
  * **Roteamento**: [React Router DOM](https://reactrouter.com/)
  * **Linting e Formatação**: ESLint e Prettier
  * **CI/CD**: GitHub Actions para checagem de lint e formatação em Pull Requests.

## Requisitos para Rodar a Aplicação

Para executar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

## Como Iniciar

Siga os passos abaixo para configurar e rodar o ambiente de desenvolvimento:

1.  **Clone o repositório:**

    ```sh
    git clone <URL_DO_SEU_REPOSITORIO_GIT>
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

    Após executar o comando, a aplicação estará disponível em `http://localhost:8080`. O servidor irá recarregar automaticamente sempre que houver alterações nos arquivos.

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

  * `npm run dev`: Inicia o servidor de desenvolvimento com Vite.
  * `npm run build`: Gera a versão de produção da aplicação na pasta `dist/`.
  * `npm run lint`: Executa o ESLint para analisar o código em busca de erros e inconsistências.
  * `npm run preview`: Inicia um servidor local para visualizar a versão de produção.
  * `npm run format`: Formata todo o código do projeto utilizando o Prettier.
