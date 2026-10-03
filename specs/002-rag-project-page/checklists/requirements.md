# Specification Quality Checklist: Página de Detalhe do Projeto de PDFs com RAG

**Purpose**: Validate specification completeness and quality before proceeding to planning
**Created**: 2026-10-03
**Feature**: [spec.md](../spec.md)

## Content Quality

- [x] No implementation details (languages, frameworks, APIs) - FRs descrevem conteúdo, comportamento e navegação; nenhuma classe CSS, arquivo de origem do portfólio ou endpoint é citado
- [x] Focused on user value and business needs - benefitedários declarados (recrutador, visitante, leitor de tela); FRs partem do que o visitante precisa saber e fazer
- [x] Written for non-technical stakeholders - jornadas e critérios descrevem percepção e resultado, não mecanismo interno
- [x] All mandatory sections completed - User Scenarios & Testing, Requirements, Success Criteria e Assumptions preenchidos; Key Entities incluída por haver dados de conteúdo

## Requirement Completeness

- [x] No [NEEDS CLARIFICATION] markers remain - nenhuma ambiguidade bloqueante; todos os pontos foram decididos a partir do contexto da conversa
- [x] Requirements are testable and unambiguous - 22 FRs em formato DEVE, cada uma com objeto e resultado verificável (ver SC-001 a SC-015 para a verificação correspondente)
- [x] Success criteria are measurable - SCs com percentuais verificáveis (100%), contagens de etapas, faixa de largura (320px a 1920px) e verificação de origem para números
- [x] Success criteria are technology-agnostic (no implementation details) - SCs descrevem leitura, navegação, legibilidade, largura de tela, foco perceptível, conferência contra a origem e ausência de destino morto; nenhuma menciona ferramenta do portfólio
- [x] All acceptance scenarios are defined - 7 user stories, 22 cenários Given/When/Then no total (3+4+3+2+2+5+3)
- [x] Edge cases are identified - 12 casos de borda, incluindo acesso direto sem passar pela home, cabeçalho fixo sobre o título, item de menu sem seção correspondente, alegação não verificável, leitura como propaganda, termo técnico em inglês, área clicável ampliada, projeto sem página de detalhe e leitor de tela diante do card ampliado
- [x] Scope is clearly bounded - FR-019 e FR-020 restringem o tratamento por card; Assumptions registram entrada pela página inicial, ausência de imagens, de métricas e de versionamento
- [x] Dependencies and assumptions identified - 8 premissas, incluindo projeto de origem somente descritivo, repositório público e ausência de dependências novas

## Feature Readiness

- [x] All functional requirements have clear acceptance criteria - FR-001 a FR-022 rastreáveis às user stories 1 a 7 e aos critérios SC-001 a SC-015
- [x] User scenarios cover primary flows - fluxo principal (entender o que é e o que entrega), **descoberta da página de detalhe a partir do card**, compreensão do funcionamento sem saber programar, decisões de engenharia, acesso ao código, acessibilidade responsiva e saída da página
- [x] Feature meets measurable outcomes defined in Success Criteria - cada SC tem ao menos um FR que o sustenta (FR-005 e FR-016 sustentam SC-001, SC-003 e SC-004; FR-007 e FR-021 sustentam SC-002 e SC-014; FR-008 e FR-022 sustentam SC-015; FR-002 e FR-019 sustentam SC-011; FR-020 e FR-019 sustentam SC-012; FR-019 sustentam SC-013; FR-012 e FR-013 sustentam SC-005; FR-014 sustenta SC-006; FR-013 sustenta SC-007 e SC-008; FR-017 sustenta SC-009)
- [x] No implementation details leak into specification - confirmado; FR-016, FR-018 a FR-020 restringem conteúdo e comportamento sem descrever construção nem nomear técnica de implementação

## Notes

- Todos os itens passaram na validação. Pronto para `/speckit.plan`.
- Nenhum marcador `[NEEDS CLARIFICATION]` foi necessário: as decisões de enquadramento (divulgar a ausência de geração de texto como diferencial), escopo (página enxuta) e conteúdo (visão geral do funcionamento, decisões de engenharia, tecnologias e acesso ao código) já estavam definidas na conversa que originou esta especificação.
- **Revisão 2026-10-03 (mudança de escopo):** a decisão inicial era manter a página isolada, sem entrada na página inicial. O escopo mudou: o card do projeto na página inicial passou a oferecer entrada para a página de detalhe, com indicação de continuação. FR-002 foi reescrito, FR-019 e FR-020 e SC-011 a SC-013 foram acrescentados, e a user story 3 foi criada para cobrir a descoberta. Consequência de escopo registrada: o outro projeto da seção não tem página, portanto não recebe destino - ver edge case "Projeto sem página de detalhe" e FR-020.
- **Revisão 2026-10-03 (segunda mudança de escopo, mesmo dia):** o diagrama que ilustrava o fluxo de cada projeto nos cards foi removido por decisão de design. O que permanece no card é apenas texto e rótulos, mais o link esticado e a indicação de continuação. FR-019 e FR-020 passaram a ser numerados de forma contígua com FR-018, SC-012 e SC-014 (proporção do visual) foram removidos e SC-013 virou o critério de acessibilidade, e o edge case "Visual genérico reaproveitado" foi substituído por "Visual removido dos cards", que registra a decisão e proíbe a reintrodução de ilustração. Nenhum requisito depende mais de imagem, ícone ou SVG nos cards.
- **Revisão 2026-10-03 (terceira mudança de escopo, mesmo dia):** a seção "Como funciona" foi reprovada por estar escrita em jargão de implementação. O conteúdo foi dividido em dois níveis: a visão geral passou a ser escrita em linguagem corrente, e os modelos, técnicas e valores foram movidos para uma seção "Detalhes técnicos" posicionada logo depois. FR-007 foi reescrito, FR-008 passou a exigir os dois níveis, e FR-021 e FR-022 foram acrescentados para travar a linguagem da visão geral e a ordem das seções. SC-002 e SC-014 passaram a medir legibilidade por não programador, e SC-015 garante que nada comprobável foi perdido. A US2 foi reformulada: o leitor-alvo deixou de ser recrutador técnico e passou a ser visitante sem formação em programação. **Ponto em aberto:** restaram duas ocorrências de jargão antes dos "Detalhes técnicos" - "prompt injection por construção" na abertura e "reranking cross-encoder" na meta description. Não foram alteradas por estarem fora do trecho aprovado; se forem revisitadas, precisam de uma formulação corrente que preserve as mesmas informações.
- **Ordem de execução invertida:** a página e o tratamento visual dos cards já foram implementados antes desta especificação. A especificação descreve o comportamento desejado e deve ser tratada como contrato de verificação - `plan.md` e `tasks.md` servem para conferir lacunas, não para gerar trabalho novo.
- Verificação de conteúdo obrigatória antes de publicar: todo valor numérico e nome de modelo citado na página (dimensão de embedding, tamanho e sobreposição de trechos, quantidade de candidatos, dimensões de trecho, nomes dos dois modelos e critérios de recusa) precisa ser conferido contra o projeto de origem, conforme FR-016 e SC-003.
- Ao usar `/speckit.tasks` para conferir a implementação existente, marcar como **verificação** (não construção) os itens de user stories 2, 4, 5 e 7, que correspondem a conteúdo já entregue - a visão geral do funcionamento, as decisões de engenharia, os detalhes técnicos e o acesso ao código, que correspondem a conteúdo já entregue, e como **construção** apenas os itens de acessibilidade e responsividade da user story 6.