<div align="center">
  <img src="https://nano.net.br/assets/programacao-DzAvORjU.png" width="50" alt="Logo NANO" />

  # NANO

  ### TECNOLOGIA SOB MEDIDA
</div>

---

## Visão Geral

O projeto **Instituto Hermes Tupinambá** é uma aplicação web moderna (Full-stack) de caráter institucional, dedicada à promoção de iniciativas nas áreas da educação, cultura e meio ambiente no estado do Pará. O sistema opera não apenas como a identidade digital visível do instituto para a sociedade, mas também como vetor de conectividade institucional e tecnológica.

O principal problema que o projeto resolve é a necessidade de um onboarding prático de novos doadores, voluntários e a comunidade geral por meio da apresentação clara de metodologias e frentes de ação (como a *Expedição do Bem*). O foco e o público-alvo abrangem desde agentes parceiros à população que é atendida pelas iniciativas sociais no Pará.

---

## Funcionalidades Principais

> Painel Institucional e Hero Viewport: Estrutura imersiva responsiva com componentes baseados em técnicas de *glassmorphism* (GlassCard).

> Assistente de Consulta Preditiva (IA): Integração server-side acoplada para conversas contextuais e requisições seguras via APIs de Language Models sem expor os tokens no frontend.

> Vitrine de Ações Sociais: Apresentação modular baseada em galerias responsivas e blocos detalhados de serviços em andamento.

> Engine de Contato Assíncrona: Formulário interativo de contato com suporte a validação baseada em schemas (React Hook Form) e gateway rápido por canais de mensageria (Botão Integrado WhatsApp).

> UX Dinâmico e Responsividade: Interfaces animadas declarativamente na entrada e no *scroll* via Framer Motion, gerando fluidez de navegação.

---

## Stack Técnica

A stack é escolhida focando em alta performance de cliente e segurança de estado no servidor de edge.

| Categoria | Tecnologia |
|---|---|
| **Frontend** | React 19, TypeScript |
| **Backend / BFF** | Node.js, Express (TypeScript) |
| **APIs / Inteligência Artificial** | SDK Google GenAI |
| **Estilização Plugar e Útil** | Tailwind CSS v4, `clsx`, `tailwind-merge` |
| **Motion e UI Feedback** | Framer Motion |
| **Gerenciamento de Formulários** | React Hook Form |
| **Ferramentas de Build** | Vite, ESBuild |
| **Ícones SVG e Assets** | Lucide React |

---

## Arquitetura do Projeto

O sistema opera sobre um padrão arquitetural dual-layer otimizado para Single Page Applications (SPA) aliado ao ecossistema de micro-servidores **(BFF - Backend for Frontend)**. 

1. **Camada de Apresentação (`src/`)**: Organizada por seções granulares (`src/sections`) de visualização única no root (`App.tsx`) interagindo com fragmentos reaproveitáveis (`src/components`). O Tailwind garante uniformidade de design através da especificação global.
2. **Camada Proxy de API (`server.ts`)**: Todas as chamadas para consumo de dados sensíveis ou processamentos intensos (como IA GenAI) passam pelo Express (ex: `/api/chat`). No cliente o ambiente envia as solicitações apenas para este gateway intermediário que injeta os segredos de ambiente antes de consultar provedores externos.
3. **Fluxo Build e Incessante**: O Vite gerencia o módulo SPA e o ESBuild paralelamente processa a lógica backend (`server.ts`) em versão estática CJS (`server.cjs`). Durante o deploy, o backend hospeda localmente a engine gráfica resultante (`dist/`).

---

## Instalação e Execução

### Pré-requisitos
- Node.js (versão >= 18 ou 20/22+ recomendada).
- Gerenciador de dependências (NPM, Yarn ou PNPM).

### Passos Locais

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd diretorio-do-projeto
```

2. **Instalação das dependências:**
```bash
npm install
```

3. **Configuração de Variáveis de Ambiente:**
Crie um arquivo `.env` na raiz do projeto embasado no `.env.example`.
```env
GEMINI_API_KEY="INSERIR_SUA_API_KEY_SEGURA_AQUI"
```

4. **Execução do ambiente de Desenvolvimento:**
```bash
npm run dev
```
*(O servidor Express orquestrado subirá via `tsx` na porta 3000 e orquestrará a camada HMR do Vite para hot-reload)*

---

## Scripts Disponíveis

Todo ecossistema é mantível por scripts registrados de forma simplificada em `package.json`:

| Script | Descrição |
|---|---|
| `npm run dev` | Inicializa o servidor Express (`tsx`) e incorpora o Web Dev Server (Vite middleware) para desenvolvimento contínuo. |
| `npm run build` | Compila o React pelo Vite e em sequência compila o `server.ts` num bundle otimizado com `esbuild` para o diretório `/dist`. |
| `npm run start` | Executa o microsserviço otimizado que está pronto para receber requisições de produção. |
| `npm run preview` | Pré-visualização da build por proxy. |
| `npm run lint` | Validação e verificação de tipagem rígida usando TypeScript sem emissão de outputs analíticos. |
| `npm run clean` | Apaga em tempo de execução diretórios build (`dist`) e limpa caching não intencional residual. |

---

## Estrutura de Pastas

```text
.
├── public/                 # Assets corporativos estáticos (Logos, Imagens diretas)
├── src/                    # Camada Frontend - Core do Sistema
│   ├── components/         # Blocos independentes e genéricos (Botões, Navbar, Forms)
│   ├── sections/           # Contêineres modulares lógicos do App (Hero, About, Footer)
│   ├── utils/              # Funções utilitárias comuns e manipulação de classes genéricas
│   ├── App.tsx             # Root Aggregator de todas as seções
│   ├── main.tsx            # Ponto de Injeção de render do React DOM
│   └── index.css           # Repositório de variáveis globais e inputs do Tailwind CSS
├── dist/                   # Camada Build da Produção (Gerada por scripts)
├── server.ts               # Lógica BFF Node.js, Express, Middleware Setup, e Endpoints
├── package.json            # Contratos de dependências, CLI Commands
├── tsconfig.json           # Estipula inferências do Compilador ECMA/Next
└── vite.config.ts          # Mappings de bundler do plugin React + Proxy Rules
```

---

## Deploy

O projeto é contêiner-agnóstico devido à natureza isolada do seu entry point em Build, otimizado para o cenário Serverless de plataformas Server-side.

**Estratégia Recomendada: Cloud Run / Docker**
O script `build` condensa o client SPA para `dist/` e o server script para `dist/server.cjs`. Para orquestração nativa, bastaria compilar a imagem Node.js apontando o entrypoint inicial como `node dist/server.cjs` e expondo a porta `3000`.

**Processo Genérico (CI/CD):**
1. Instalação e execução de Lint de tipagem estrita via Github Actions.
2. Composição transpilada de `npm run build`.
3. Injeção de secrets (ex: `GEMINI_API_KEY`) no painel de Runtime.
4. Hospedagem executada num serviço PAAS (ex: Vercel, Railway) voltado para deploy node monorepo ou em instâncias EC2 / ECS em topologias corporativas.

---

## Considerações Técnicas

- **Segurança de Credentials:** A aplicação é protegida logicamente por nunca transpor referências de token (AI/APIs) ao client, centralizando as chamadas sigilosas de forma autônoma no server BFF.
- **Padrão Compositivo:** Formulários operam sob delegação de eventos focados, prevenidos de reloads desnecessários visando controle transacional de requisições.
- **Performance de Build:** O empacotamento com `esbuild` reduz o tempo de injeção em contêineres server-side com formato unificado `.cjs`, evadindo gargalos de imports relativos nativos de dependências profundas do ecossistema Node em produção.
- **Modularização UI:** Arquitetura atômica diluída nas coleções de *sections* minimiza a poluição visual do contêiner mestre (`App.tsx`), mantendo facilidade na substituição e refatoração escalável sob demanda.

---

## 🚀 Desenvolvido por

> **Sandro Peixoto**  
> https://www.sandropeixoto.com.br
>
> **NANO**  
> https://nano.net.br
