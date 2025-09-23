# Leads App - Frontend

Este é o projeto frontend para a aplicação de gerenciamento de Leads, desenvolvido com React, Vite e TypeScript.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/installation)
- O **backend** da aplicação precisa estar rodando localmente (geralmente em `http://localhost:3333`).
  - [Backend Repository](https://github.com/rayanesal/leads)

## Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o ambiente de desenvolvimento.

**1. Clone o repositório**

```bash
git clone git@github.com:rayanesal/leads-front.git
cd leads-front
```

**2. Crie o arquivo de ambiente**

Crie um novo arquivo chamado `.env` na raiz do projeto e adicione a URL da sua API:

```env
VITE_API_URL=http://localhost:3333
VITE_WHATSAPP_CONTACT=5581988888888
```

**3. Instale as dependências**

Use o pnpm para instalar todos os pacotes necessários.

```bash
pnpm install
```

**4. Inicie o servidor de desenvolvimento**

Este comando irá iniciar a aplicação em modo de desenvolvimento, geralmente na porta `http://localhost:5173`.

```bash
pnpm dev
```

Agora é só abrir o seu navegador no endereço indicado pelo terminal\.

## Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Compila o projeto para produção.
- `pnpm lint`: Executa o linter para verificar a qualidade do código.
- `pnpm preview`: Inicia um servidor de pré-visualização para visualizar a aplicação em produção.
