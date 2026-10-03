# Implementation Plan: Portfólio de Wesley Ferino

**Branch**: `001-portfolio-website` | **Date**: 2026-10-01 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-portfolio-website/spec.md`

## Summary

Portfólio estático em português-BR para apresentar Wesley Ferino (6º período Engenharia de Software - UNIVILLE), com foco em IA aplicada a sistemas reais. Deve exibir identidade, trajetória, projetos (Processamento de PDFs com RAG e Sistema Financeiro com IA), tecnologias, contatos e garantir responsividade com navegação fluida. Estrutura de site estático (HTML, CSS, JavaScript vanilla) priorizando simplicidade, manutenibilidade e conformidade com a Constituição do projeto.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript (ES6+)

**Primary Dependencies**: N/A (sem dependências externas obrigatórias; pode usar fontes do Google Fonts apenas se necessário, sem frameworks)

**Storage**: N/A (site estático)

**Testing**: Validação manual + testes de acessibilidade/responsividade (não há framework de teste automatizado definido - validar conforme SCs)

**Target Platform**: Navegadores web modernos (Chrome, Firefox, Safari, Edge) - desktop, tablet e mobile

**Project Type**: Static website (single-page com múltiplas seções)

**Performance Goals**: O site deve carregar rapidamente e as animações devem permanecer fluidas sem prejudicar a navegação.

**Constraints**: Responsivo (320px - 1920px), acessibilidade básica (contraste, teclado), conteúdo em pt-BR conforme Constituição

**Scale/Scope**: 1 página com seções (Início/Sobre/Projetos/Contato), ~2-4 projetos, conteúdo estático

## Constitution Check

*GATE: Deve passar antes da Fase 0. Re-verificar após Fase 1.*

| Princípio | Verificação | Status | Justificativa |
|----------|-------------|--------|---------------|
| I. Identidade Pessoal e Profissional | Exibe nome completo, formação, idade, trajetória, foco IA | OK | Atende FR-001, FR-002, FR-013 |
| II. Design Distintivo e Acessível | Design moderno/tecnológico, não excessivamente corporativo, acessível | OK | Estilo visual definido, animações sutis (FR-011) |
| III. Foco em Inteligência Artificial | Destaque explícito em Sobre + Projetos (RAG + embeddings) | OK | FR-003, FR-004, FR-005, SC-008 |
| IV. Consistência e Convenções | UI/documentação pt-BR; código/identificadores inglês; comentários pt-BR; commits Conventional Commits | OK | Será respeitado na implementação (estruturas, comentários, commits) |
| V. Simplicidade e Manutenibilidade | Sem frameworks pesados, HTML/CSS/JS vanilla, dependências mínimas | OK | Projeto estático simples, fácil manter |
| VI. Responsividade | Mobile/tablet/desktop com adaptação de layout/conteúdo | OK | FR-010, FR-014, SC-003 |
| VII. Qualidade e Validação | Cada funcionalidade validada (funcionalidade, integração, responsividade, erros) | OK | Seguir SCs e quickstart de validação |

**GATE**: PASS (todos os princípios atendidos com design simples)

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 (not created by /speckit.plan)
```

### Source Code (repository root)

```text
/
├── index.html           # Página principal (one-page)
├── css/
│   ├── styles.css       # Estilos principais
│   └── responsive.css   # Media queries e responsividade
├── js/
│   └── main.js          # Interações e navegação suave
├── assets/
│   ├── images/          # Imagens/ícones (se houver)
│   └── icons/           # Ícones SVG (opcional)
├── README.md            # Documentação do projeto (pt-BR)
└── .gitignore
```

**Structure Decision**: Site estático com estrutura simples (HTML + CSS + JS separados). Sem build tools por simplicidade (Constituição V). Estrutura flat e clara.

## Phase 0: Outline & Research

### Unknowns from Technical Context
Nenhum NEEDS CLARIFICATION crítico identificado na spec. Assunções cobrem pontos relevantes.

### Research tasks
1. Boas práticas de portfolio estático moderno (performance, acessibilidade, SEO básico)
2. Padrões de one-page com navegação suave e âncoras
3. Boas práticas de CSS responsivo (mobile-first) e tipografia
4. Acessibilidade básica: contraste adequado, navegação por teclado, elementos semânticos e foco visível.

### Research findings format
- Decision, Rationale, Alternatives considered

**Output**: `research.md`

## Phase 1: Design & Contracts

### 1. Data Model → `data-model.md`

Define a estrutura dos dados estáticos utilizados pelo portfólio,
incluindo projetos, tecnologias, seções e contatos.

### 2. UI Contract → `contracts/ui-contracts.md`

Define a estrutura esperada das seções e os comportamentos principais
da interface, sem especificar detalhes de implementação visual.

### 3. Quickstart → `quickstart.md`

Guia de validação end-to-end: abrir `index.html` localmente, verificar cada
seção (identidade, história, projetos de IA, tecnologias e contatos),
validar responsividade (mobile/tablet/desktop), links externos,
navegação suave, conteúdo em pt-BR e conformidade com os critérios de sucesso.

**Output**: `quickstart.md`

**Outputs**: `quickstart.md`

## Phase 2: Task Planning Approach

**Tasks will be generated by `/speckit.tasks`** using the artifacts above. Planned task areas:
- Setup: estrutura de pastas (css/, js/, assets/), .gitignore, README.md
- HTML: index.html com seções (Início, Sobre, Projetos, Contato), semântica, âncoras
- CSS: styles.css (base, tipografia, cores, layout) + responsive.css (mobile-first breakpoints)
- JS: main.js (navegação suave, menu mobile, active link, animações sutis)
- Conteúdo: dados estáticos conforme modelo (projetos com status, destaque IA, links contatos)
- Validação: executar quickstart.md em viewports mobile/tablet/desktop, verificar links, conformidade Constituição
- Qualidade: garantir pt-BR UI, comentários pt-BR, código inglês, sem complexidade

**Parallel opportunities**: HTML/CSS/estrutura base podem evoluir em paralelo com definição de conteúdo.

## Key rules

- Usar caminhos absolutos para operações de filesystem; caminhos relativos ao projeto para docs
- ERROR em falhas de gate ou clarificações não resolvidas
- Seguir Constituição: pt-BR UI/docs, inglês código/identificadores, pt-BR comentários

## Done When

- [ ] Plan preenchido com Technical Context e Constitution Check (após Fase 0/1)
- [ ] Fase 0 concluída (research.md)
- [ ] Fase 1 concluída (quickstart.md)
- [ ] GATE re-verificado após design - PASS
- [ ] Tarefas geradas em tasks.md via `/speckit.tasks`
- [ ] Implementação e validação conforme quickstart aprovados

## Gates Re-verification (Post-Design)

Após artefatos de design (quickstart), todos princípios mantêm conformidade:
- Design permanece simples (vanilla) - OK
- Sem dependências externas desnecessárias - OK
- Contratos de UI claros, sem vazar implementação - OK
- Quickstart cobre todos SCs e FRs - OK

**GATE STATUS**: PASS
