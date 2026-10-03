# Feature Specification: Portfólio de Wesley Ferino

**Feature Branch**: `001-portfolio-website`

**Created**: 2026-10-01

**Status**: Draft

**Input**: User description: "crie a especificação do portifólio com base nos requisitos a seguir" (detalhados com identidade, objetivo, público-alvo, história, projetos, tecnologias, contatos, estilo visual, comportamento, percepção desejada e diferencial)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visualizar perfil e trajetória (Priority: P1)

Um recrutador ou visitante deseja conhecer rapidamente quem é Wesley, sua formação, trajetória na programação e seu foco em IA.

**Why this priority**: Esta é a primeira impressão e estabelece identidade profissional.

**Independent Test**: Pode ser testado acessando a página inicial/Seção Sobre e verificando se nome, idade, formação, história e foco em IA são apresentados de forma clara.

**Acceptance Scenarios**:

1. **Given** visitante acessa o site, **When** visualiza a página inicial, **Then** deve ver nome "Wesley Ferino de Carvalho", formação (6º período de Engenharia de Software - UNIVILLE) e foco em IA.
2. **Given** visitante está na seção "Sobre", **When** lê o conteúdo, **Then** deve visualizar a história da programação (Frontend → Hardware/Software → IA) de forma clara e em português-BR.

---

### User Story 2 - Explorar projetos com foco em IA (Priority: P1)

Um recrutador deseja conhecer os projetos e compreender como Wesley aplica conhecimentos de Inteligência Artificial em sistemas de software

**Why this priority**: Diferencial do portfólio é IA aplicada a sistemas reais.

**Independent Test**: Navegando até "Projetos", consegue visualizar ambos os projetos com descrição, tecnologias e destaque para IA.

**Acceptance Scenarios**:

1. **Given** visitante na seção Projetos, **When** visualiza o card do projeto "Processamento de PDFs com RAG", **Then** deve ver descrição do fluxo (PDF + perguntas em linguagem natural, embeddings, respostas), contexto universitário e tecnologias (embeddings, RAG).
2. **Given** visitante na seção Projetos, **When** visualiza o card do "Sistema Financeiro com IA", **Then** deve ver integração com Telegram, categorização automática com embeddings, relatórios por período/categoria e status "em desenvolvimento".

---

### User Story 3 - Acessar contatos profissionais (Priority: P2)

Um recrutador interessado deseja entrar em contato com o desenvolvedor.

**Why this priority**: Essencial para conversão profissional.

**Independent Test**: Seção de Contato exibe links para email, LinkedIn e GitHub, todos clicáveis e com destino correto.

**Acceptance Scenarios**:

1. **Given** visitante na seção Contato, **When** clica no link do LinkedIn, **Then** abre o perfil em nova aba.
2. **Given** visitante na seção Contato, **When** clica no link do GitHub, **Then** abre o repositório/perfil em nova aba.
3. **Given** visitante na seção Contato, **When** clica no email, **Then** deve abrir o cliente de email padrão com destinatário preenchido (ou exibir endereço claramente).

---

### User Story 4 - Navegar responsivamente com fluidez (Priority: P2)

Um visitante acessa via mobile/tablet/desktop e espera experiência consistente.

**Why this priority**: Garante acessibilidade e qualidade conforme princípio de Responsividade.

**Independent Test**: Redimensionar viewport entre mobile, tablet e desktop - layout, navegação, tipografia e interações se adaptam sem quebra de conteúdo.

**Acceptance Scenarios**:

1. **Given** em viewport mobile (ex.: 360x640), **When** navega entre seções, **Then** menu permanece acessível, conteúdo legível e sem overflow horizontal.
2. **Given** em viewport tablet (ex.: 768-1024), **When** visualiza projetos, **Then** cards se reorganizam de forma clara.
3. **Given** em viewport desktop (>=1280), **When** interage com elementos, **Then** animações são suaves e não prejudicam usabilidade.

---

### User Story 5 - Transmitir percepção desejada (Priority: P3)

O visitante percebe o desenvolvedor como profissional, comprometido, flexível, curioso e aberto a aprender, sem parecer excessivamente formal.

**Why this priority**: Reflete identidade e diferenciação por tom de comunicação.

**Independent Test**: Revisão de conteúdo em português-BR - tom acessível, profissional e autêntico.

**Acceptance Scenarios**:

1. **Given** lê seção Sobre, **When** avalia tom, **Then** texto transmite curiosidade, evolução natural (não forçada) e foco prático.
2. **Given** lê descrições de projetos, **When** avalia linguagem, **Then** utiliza termos técnicos com clareza, evitando jargão excessivo.

---

### Edge Cases

- **Conteúdo longo**: Descrições de projetos podem ser extensas - devem manter legibilidade e não quebrar layout em telas pequenas.
- **Links externos**: Links de LinkedIn/GitHub devem abrir em nova aba e não quebrar navegação (target="_blank" com rel apropriado).
- **Estado "em desenvolvimento"**: Projeto Sistema Financeiro está em desenvolvimento - deve ser indicado claramente sem sugerir que está concluído.
- **Sem imagens?**: Caso não existam imagens dos projetos, deve haver placeholder visual consistente com identidade tecnológica/moderna.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Sistema DEVE exibir identidade completa: nome completo "Wesley Ferino de Carvalho", idade (21 anos), formação (6º período de Engenharia de Software - UNIVILLE).
- **FR-002**: Sistema DEVE apresentar seção "Sobre" com história da programação: interesse inicial por tecnologia/videogames, contato com programação na escola, evolução Frontend → Hardware/Software → IA (destacando IA como motivação).
- **FR-003**: Sistema DEVE apresentar seção "Projetos" com pelo menos 2 projetos, destacando aplicação prática de IA em ambos.
- **FR-004**: Sistema DEVE descrever projeto "Processamento de PDFs com RAG": usuário fornece PDF, perguntas em linguagem natural, uso de embeddings para busca semântica, respostas, contexto relacionado à universidade.
- **FR-005**: Sistema DEVE descrever projeto "Sistema Financeiro com IA": integração com API do Telegram, uso de embeddings para categorização automática de gastos, geração de relatórios por período e categoria, com indicação de status "em desenvolvimento".
- **FR-006**: Sistema DEVE listar tecnologias/conhecimentos: Python, Flask, scikit-learn, MySQL, APIs, HTML, CSS, Git, GitHub, embeddings, RAG e conceitos de Machine Learning.
- **FR-007**: Sistema DEVE disponibilizar seção "Contato" com email, LinkedIn e GitHub (links funcionais).
- **FR-008**: Sistema DEVE abrir links externos (LinkedIn, GitHub) em nova aba, preservando segurança (rel="noopener noreferrer").
- **FR-009**: Sistema DEVE ter navegação por seções (âncoras) fluida e intuitiva com comportamento consistente entre telas.
- **FR-010**: Sistema DEVE aplicar responsividade: adaptar layout, conteúdo e elementos para mobile, tablet e desktop.
- **FR-011**: Sistema DEVE utilizar interações/animações sutis que contribuam para UX, sem prejudicar desempenho ou acessibilidade.
- **FR-012**: Sistema DEVE apresentar tom de comunicação em português-BR: profissional, moderno, acessível, autêntico, sem excessivamente corporativo ou excessivamente formal/engessado.
- **FR-013**: Sistema DEVE transmitir diferencial: interesse e experiência prática em integrar IA a sistemas e resolver problemas reais.
- **FR-014**: Sistema DEVE manter consistência visual e comportamental entre diferentes tamanhos de tela.

### Key Entities *(include if feature involves data)*

- **Seção**: Representa áreas do portfólio (Início, Sobre, Projetos, Contatos). Atributos: identificador, título, ordem de exibição, visibilidade.
- **Projeto**: Representa trabalho apresentado. Atributos: nome, descrição, tecnologias, destaque IA (boolean), status (concluído/em desenvolvimento), links (opcionais).
- **Tecnologia**: Representa competência técnica. Atributos: nome, categoria (Backend, Frontend, Dados/IA, Ferramentas).
- **Contato**: Representa canal profissional. Atributos: tipo (Email, LinkedIn, GitHub), URL/valor, ícone, abreEmNovaAba.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: O visitante deve conseguir identificar claramente o nome, a formação e o foco profissional do desenvolvedor ao acessar a página inicial.
- **SC-002**: 100% dos links de contato (email, LinkedIn, GitHub) são clicáveis e direcionam corretamente.
- **SC-003**: Layout mantém legibilidade e sem overflow horizontal em viewports de 320px até 1920px (responsividade validada em mobile/tablet/desktop).
- **SC-004**: Pelo menos 2 projetos com destaque explícito para aplicação prática de IA são apresentados de forma clara.
- **SC-005**: A interface e os conteúdos apresentados ao usuário devem estar em português-BR, seguindo as convenções definidas na Constitution.
- **SC-006**: Navegação entre seções é fluida (sem saltos abruptos) e consistente entre tamanhos de tela.
- **SC-007**: Tom transmite percepção desejada (profissional, comprometido, flexível, curioso, aberto a aprender) conforme descrito em requisitos - verificável por revisão de conteúdo.
- **SC-008**: Diferencial (IA aplicada a sistemas reais) fica evidente ao ler Sobre + Projetos.

## Assumptions

- **Público-alvo**: Recrutadores/profissionais de TI com conhecimento básico de termos como RAG, embeddings e ML - descrições devem ser claras sem simplificar excessivamente.
- **Sem CMS**: Conteúdo é estático e versionado no repositório.
- **Links externos**: Perfis LinkedIn/GitHub existem e são públicos; endereço de email será informado de forma clara.
- **Imagens opcionais**: Não há imagens obrigatórias fornecidas; caso ausentes, usar placeholders consistentes com estilo tecnológico/moderno.
- **Projeto em desenvolvimento**: Sistema Financeiro permanece com status "em desenvolvimento" - isso deve ser explícito na UI.
- **Idioma/convenções**: Seguir Constituição: UI/documentação pt-BR, código/identificadores inglês, comentários pt-BR, commits Conventional Commits (quando versionado).
- **Performance**: Animações leves, sem vídeos pesados em carregamento inicial.
- **Escopo v1**: O portfólio será inicialmente apresentado como uma página única composta por múltiplas seções.
- **Contexto acadêmico**: Projeto PDFs menciona "contexto relacionado à universidade" - manter menção genérica sem expor dados sensíveis.
