# Tasks: Portfólio de Wesley Ferino

**Input**: Design documents from `/specs/001-portfolio-website/`
- Spec: `spec.md` (User Stories US1–US5, Prioridades P1/P2/P3)
- Plan: `plan.md` (HTML5/CSS3/JS vanilla, estrutura estática)
- Research: `research.md` (decisões mobile-first, acessibilidade, navegação suave)
- Data Model: `data-model.md` (Seção, Projeto, Tecnologia, Contato)
- Contracts: `contracts/ui-contract.md` (estrutura de UI por seções)
- Quickstart: `quickstart.md` (critérios de validação E2E)

**Prerequisites**: plan.md (obrigatório), spec.md (obrigatório)

**Tests**: Não solicitados explicitamente na especificação. Não serão geradas tarefas de teste.

**Organization**: Tarefas organizadas por user story para permitir implementação e validação independentes.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Pode ser executada em paralelo (arquivos diferentes, sem dependências)
- **[Story]**: US1, US2, US3, US4, US5 (mapeado às user stories)
- Incluir caminhos exatos de arquivo nas descrições

## Path Conventions

- Projeto único (site estático): raiz com `index.html`, `css/`, `js/`, `assets/`, `README.md`, `.gitignore`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Inicialização do projeto e estrutura básica

- [ ] T001 Criar estrutura de diretórios conforme plan.md (`css/`, `js/`, `assets/images/`, `assets/icons/`) na raiz do repositório
- [ ] T002 Criar arquivo `.gitignore` na raiz com exclusões apropriadas para projeto estático (OS files, temp, logs). Verificar se já existe e ajustar se necessário
- [ ] T003 Criar `README.md` na raiz com descrição do portfólio em português-BR (nome, objetivo, foco em IA, tecnologias, como abrir localmente)

**Checkpoint**: Estrutura básica pronta.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Infraestrutura base compartilhada por todas as user stories. DEVE estar completa antes das stories.

**CRITICAL**: Nenhum trabalho de user story pode iniciar até este phase estar completo.

- [ ] T004 Criar `css/styles.css` com reset/normalize, variáveis CSS (cores, tipografia, espaçamentos), estilos base (body, headings, links, listas) e utilitários. Seguir mobile-first e legibilidade.
- [ ] T005 Criar `css/responsive.css` com breakpoints mobile-first (<768px base, tablet 768–1023px, desktop >=1024px). Estruturar media queries organizadas.
- [ ] T006 Criar `js/main.js` com scaffold base: estrutura IIFE, função init(), navegação suave por âncoras, controle de menu mobile (toggle), detecção de seção ativa (scroll spy) e tratamento de acessibilidade (focus). Incluir comentários em português-BR conforme Constituição IV.
- [ ] T007 Criar `index.html` com estrutura HTML5 semântica (header/nav, main com seções, footer), meta tags (viewport, title, description), inclusão de CSS/JS, âncoras (#inicio,#sobre,#projetos,#contato) e landmark roles apropriados. Usar idioma pt-BR.

**Checkpoint**: Fundação pronta - todas as user stories podem iniciar (independentes entre si após este ponto).

---

## Phase 3: User Story 1 - Visualizar perfil e trajetória (Priority: P1) – MVP

**Goal**: Apresentar identidade completa (nome, idade, formação, UNIVILLE), seção Sobre com história (Frontend → Hardware/Software → IA) e foco em IA. Atende FR-001, FR-002, SC-001, SC-007.

**Independent Test**: Acessar index.html, verificar Hero com nome completo "Wesley Ferino de Carvalho", idade 21, formação "6º período de Engenharia de Software - UNIVILLE", foco IA visível em <10s. Ler seção Sobre com história completa (SC-001, aceitação US1).

### Implementation for User Story 1

- [ ] T008 [US1] Implementar seção Hero (#inicio) em `index.html`: nome completo, idade (21 anos), formação (UNIVILLE), frase destacando foco em IA aplicada a sistemas. Seguir tom profissional/acessível (pt-BR).
- [ ] T009 [US1] Implementar seção Sobre (#sobre) em `index.html`: título, parágrafos com história da programação (interesse tecnologia/videogames → escola → Frontend → Hardware/Software → IA), destacando IA como motivação. Usar conteúdo fiel ao spec/data-model.
- [ ] T010 [US1] Adicionar estilos para Hero e Sobre em `css/styles.css`: tipografia, espaçamentos, alinhamento, hierarquia de headings. Garantir legibilidade e contraste adequado.
- [x] T011 [US1] Validar US1 independentemente: abrir index.html, conferir identidade completa e história (conforme cenários US1). Ajustar texto/tom se necessário.

**Checkpoint**: US1 totalmente funcional e testável independentemente (MVP core identificado).

---

## Phase 4: User Story 2 - Explorar projetos com foco em IA (Priority: P1)

**Goal**: Apresentar seção Projetos com pelo menos 2 projetos, ambos com destaque explícito de IA aplicada. Detalhar RAG/PDFs (contexto universitário) e Sistema Financeiro (Telegram, embeddings, relatórios, status em desenvolvimento). Atende FR-003–FR-005, SC-004, SC-008.

**Independent Test**: Navegar até #projetos. Ver card "Processamento de PDFs com RAG" com descrição (PDF + linguagem natural, embeddings, busca semântica, respostas, contexto universitário). Ver card "Sistema Financeiro com IA" com Telegram, categorização embeddings, relatórios por período/categoria, status "Em desenvolvimento" explícito. Diferencial IA evidente (SC-008).

### Implementation for User Story 2

- [ ] T012 [US2] Implementar seção Projetos (#projetos) em `index.html`: título "Projetos", container de grid/lista de cards.
- [ ] T013 [US2] Adicionar card Projeto 1: "Processamento de PDFs com RAG" em `index.html` conforme dados estáticos (data-model). Incluir: descrição completa, badge "IA aplicada", tecnologias (embeddings, RAG, Python e complementares), status (concluído). Não expor dados sensíveis (contexto universitário genérico).
- [ ] T014 [US2] Adicionar card Projeto 2: "Sistema Financeiro com IA" em `index.html` conforme data-model. Incluir: descrição, badge "IA aplicada", tecnologias (Telegram API, embeddings, Python, Machine Learning), status "Em desenvolvimento" EXPLÍCITO (obrigatório).
- [ ] T015 [US2] Estilizar cards de Projetos em `css/styles.css`: layout em grid responsivo, cards com sombra/hover sutil (transições CSS), badges, tags de tecnologias, indicação clara de status. Transições leves (FR-011).
- [x] T016 [US2] Validar US2 independentemente: conferir ambos cards, destaque IA visível, status em desenvolvimento explícito, tecnologias listadas (SC-004).

**Checkpoint**: US1+US2 funcionais independentemente (diferencial IA coberto).

---

## Phase 5: User Story 3 - Acessar contatos profissionais (Priority: P2)

**Goal**: Seção Contato com Email, LinkedIn e GitHub. Links funcionais, externos abrem em nova aba com segurança. Atende FR-007, FR-008, SC-002.

**Independent Test**: #contato exibe 3 links (Email, LinkedIn, GitHub). Todos clicáveis, LinkedIn/GitHub abrem em nova aba com rel="noopener noreferrer", email mailto: correto. 100% direcionam corretamente (SC-002).

### Implementation for User Story 3

- [ ] T017 [US3] Implementar seção Contato (#contato) em `index.html`: título "Contato", lista de links (email, LinkedIn, GitHub) com rótulos pt-BR. Definir URLs/valor mailto (usar placeholder claro se não definido ainda, mas funcional).
- [ ] T018 [US3] Garantir links externos com segurança: `target="_blank"` + `rel="noopener noreferrer"` para LinkedIn e GitHub. Email sem target _blank (mailto:). Conforme FR-008 e contrato UI.
- [ ] T019 [US3] Estilizar seção Contato em `css/styles.css`: links com foco visível, estados hover, acessíveis por teclado. Garantir contraste adequado.
- [x] T020 [US3] Validar US3 independentemente: testar clique em todos links (SC-002). Verificar abertura em nova aba e segurança.

**Checkpoint**: US1–US3 cobrem identidade+projetos+contato (fluxos principais).

---

## Phase 6: User Story 4 - Navegar responsivamente com fluidez (Priority: P2)

**Goal**: Responsividade completa (320–1920px), navegação fluida/suave, menu acessível, sem overflow horizontal, comportamento consistente. Atende FR-009–FR-011, FR-014, SC-003, SC-006.

**Independent Test**: Testar viewports mobile (360x640), tablet (768–1024), desktop (>=1280). Menu acessível, conteúdo legível, sem overflow horizontal, scroll suave entre seções, âncoras funcionais, consistência entre telas (SC-003, SC-006).

### Implementation for User Story 4

- [ ] T021  [US4] Implementar navegação (header/nav) em `index.html`: links âncora para todas seções, estrutura semântica, acessível (nav com aria apropriado se necessário).
- [ ] T022  [US4] Adicionar menu hamburguer/responsivo em `index.html` para mobile (<768px) (botão com aria-label, visível apenas em mobile).
- [ ] T023 [US4] Implementar comportamento de menu mobile em `js/main.js`: toggle abrir/fechar, fechar ao clicar link, fechar com ESC, manter foco acessível. Navegação suave por âncoras (scroll-behavior CSS + fallback). Adicionar detecção de seção ativa (scroll spy) leve.
- [ ] T024 [US4] Aplicar estilos responsivos em `css/responsive.css`: mobile-first. Hero, Sobre, Projetos (grid), Contato, navegação (menu colapsado/expandido). Garantir sem overflow horizontal em 320–1920px. Espaçamentos e tipografia escalonáveis (rem).
- [ ] T025 [US4] Adicionar prefers-reduced-motion (respeito a redução de movimento) em CSS/JS para acessibilidade (animações sutis conforme FR-011).
- [x] T026 [US4] Validar US4 independentemente: redimensionar entre 320–1920px (SC-003), testar navegação suave (SC-006), menu mobile, teclado (foco visível).

**Checkpoint**: US1–US4 completos, responsivos e fluidos.

---

## Phase 7: User Story 5 - Transmitir percepção desejada (Priority: P3)

**Goal**: Refinar tom em pt-BR (profissional, comprometido, flexível, curioso, aberto a aprender, sem excessivamente formal/engessado). Destacar diferencial IA aplicada a sistemas reais. Atende FR-012, FR-013, SC-005, SC-007, SC-008.

**Independent Test**: Revisar Sobre + Projetos: tom acessível/autêntico, linguagem clara com termos técnicos sem jargão excessivo, diferencial evidente, 100% pt-BR (SC-005, SC-007, SC-008).

### Implementation for User Story 5

- [ ] T027  [US5] Refinar textos de Hero/Sobre/Projetos/Contato em `index.html` para transmitir percepção desejada (curiosidade, evolução natural, foco prático). Ajustar microcopy sem alterar requisitos técnicos.
- [x] T028 [US5] Revisar hierarquia tipográfica e espaçamentos em `css/styles.css` para reforçar leitura clara e tom acessível (estilo moderno/tecnológico, não excessivamente corporativo).
- [x] T029 [US5] Validar US5 independentemente: revisão de conteúdo conforme aceitação US5 e SC-005/SC-007/SC-008.

**Checkpoint**: Todas as user stories (US1–US5) completas e refinadas.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Melhorias globais, conformidade com Constituição, documentação e validação completa via quickstart.

- [ ] T030  Revisar comentários no código: garantir comentários em português-BR em JS/CSS quando relevante (Constituição IV). Código/identificadores em inglês (classes/ids semânticos em inglês ou kebab-case consistentes; manter nomes de seções/labels em HTML pt-BR conforme UI pt-BR).
- [ ] T031  Atualizar `README.md` com instruções completas: como abrir (file:// e servidor local Python/Node), estrutura, tecnologias, objetivo, foco IA, validação rápida. Em português-BR.
- [ ] T032  Verificar acessibilidade básica: foco visível, contraste, navegação por teclado, alt text em assets (se adicionados futuramente), aria-labels em botão hamburguer. Sem intrusividade.
- [ ] T033  Otimizações de performance leves: evitar layout shifts, animações CSS-only, sem recursos pesados. Carregamento <1s (Performance Goals).
- [ ] T034 Executar validação completa conforme `quickstart.md` em todos os viewports (mobile 360x640, tablet 768–1024, desktop >=1280, faixa 320–1920px). Verificar TODOS os itens: identidade, Sobre, Projetos (ambos + status explícito), Tecnologias, Contatos (links + segurança), Navegação, Responsividade, Interações, Qualidade e Checklist de Constituição.
- [ ] T035 Marcar checklist de quickstart.md como completo após validação aprovada. Verificar conformidade integral com SC-001–SC-008 e FR-001–FR-014.
- [ ] T036 Limpeza final: sem console.log, código organizado, sem comentários desnecessários, estrutura conforme plan.md.

**Checkpoint**: Feature completa, validada e pronta para entrega.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: Sem dependências – iniciar imediatamente
- **Phase 2 (Foundational)**: Depende de Phase 1 – BLOQUEIA todas as user stories
- **Phase 3 (US1 P1)**: Depende de Phase 2
- **Phase 4 (US2 P1)**: Depende de Phase 2 (independente de US1, pode executar em paralelo com US1 se recursos permitirem)
- **Phase 5 (US3 P2)**: Depende de Phase 2 (independente de US1/US2)
- **Phase 6 (US4 P2)**: Depende de Phase 2 (independente; beneficia de US1–US3 existirem para validar navegação)
- **Phase 7 (US5 P3)**: Depende de Phase 2 (ideal após US1–US4 para refinamento de tom)
- **Phase 8 (Polish)**: Depende de US1–US5 completos

### User Story Dependencies

- **US1 (P1)**: Após Phase 2 – sem dependência de outras stories (testável independentemente)
- **US2 (P1)**: Após Phase 2 – sem dependência de US1 (testável independentemente). Pode rodar em paralelo com US1.
- **US3 (P2)**: Após Phase 2 – sem dependência (testável independentemente). Pode paralelo com US1–US2.
- **US4 (P2)**: Após Phase 2 – sem dependência funcional (testável independentemente). Recomenda-se validar com conteúdo completo.
- **US5 (P3)**: Após Phase 2 – refinamento; melhor executar após conteúdo base (US1–US4) para polimento de tom.

### Parallel Opportunities

- **Phase 1**: T002, T003  podem rodar em paralelo
- **Phase 2**: T004,T005,T006  paralelos; T007 sequencial após (depende estrutura base referenciada)
- **US1**: T008,T009  paralelos; T010 após; T011 validação
- **US2**: T012,T013,T014  paralelos (cards independentes); T015 após; T016 validação
- **US3**: T017,T018  paralelos; T019 após; T020 validação
- **US4**: T021,T022  paralelos; T023–T025 sequenciais/lógicos; T026 validação
- **US5**: T027  pode rodar com ajustes; T028 após; T029 validação
- **Polish**: T030–T033  paralelos (distintos arquivos: CSS/JS/README/acessibilidade); T034–T036 sequenciais (validação completa)

### Parallel Example: US1 + US2 (após Foundation)

```text
Após T007 completo:
- T008,T009 [US1]  (Hero + Sobre em index.html)
- T012,T013,T014 [US2]  (Projetos + 2 cards em index.html)
Podem ser executados em paralelo (mesmo arquivo index.html, mas blocos de seções distintos – edição não conflituosa com cuidado)
```

**Nota**: Ao editar mesmo arquivo (`index.html`) em paralelo, recomenda-se trabalhar em seções diferentes (Hero/Sobre vs Projetos) para evitar conflitos. CSS/JS distintos são totalmente paralelizáveis.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Phase 1 (Setup)
2. Phase 2 (Foundational) – CRÍTICO
3. Phase 3 (US1) – MVP
4. **STOP e VALIDAR**: US1 independentemente (SC-001, aceitação US1)
5. Demo pronto com identidade + trajetória

### Incremental Delivery

1. Setup + Foundational → base sólida
2. +US1 (P1) → validar → entregar MVP
3. +US2 (P1) → validar independentemente → diferencial IA
4. +US3 (P2) → validar → contatos
5. +US4 (P2) → validar responsividade/navegação
6. +US5 (P3) → polimento de tom/percepção
7. Polish → validação completa quickstart

### Team Parallel Strategy

Com múltiplos desenvolvedores (após Phase 2):
- Dev A: US1
- Dev B: US2
- Dev C: US3
- Dev D: US4 (com integração de conteúdo)
- Dev E: US5 + revisão

---

## Notes

-  = arquivos diferentes ou seções não conflitantes; evitar editar mesmo bloco simultaneamente
- [Story] mapeia rastreabilidade às USs da spec
- Cada US testável independentemente (conforme Independent Test em spec)
- Seguir Constituição: UI/docs pt-BR, código/identificadores inglês, comentários pt-BR
- Manter simplicidade (vanilla HTML/CSS/JS) – sem frameworks
- Status "Em desenvolvimento" do projeto Sistema Financeiro DEVE ser explícito (T014)
- Links externos SEMPRE com `rel="noopener noreferrer"` + `target="_blank"` (T018)
- Diferencial IA aplicado a sistemas reais deve ficar evidente (US1+US2, validado T016/T029)
- Validar faixa 320–1920px (T034, SC-003)
- Nenhum teste automatizado solicitado – foco em validação manual via quickstart.md

**Total de tarefas**: 36  
**MVP recomendado**: US1 (T001–T011) – após Phase 2  
**User Stories**: US1(4 tasks impl + validação), US2(5), US3(4), US4(6), US5(3) + Setup(3)+Foundational(4)+Polish(7)