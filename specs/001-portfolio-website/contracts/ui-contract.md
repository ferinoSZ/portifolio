# UI Contract: Portfólio de Wesley Ferino

**Tipo**: Front-end estático (HTML/CSS/JS)
**Data**: 2026-10-01

## Visão Geral

Contrato de estrutura de UI para o portfólio. Define seções obrigatórias, elementos, classes/IDs esperados e comportamento de navegação - sem especificar estilos de implementação, apenas estrutura e contratos de interação.

## Seções Obrigatórias

### 1. Header/Navigation (#inicio / nav)
**Contrato**: Menu de navegação fixo/responsivo com links para seções.

**Elementos esperados**:
- Logo/nome curto (opcional): "Wesley Ferino" ou apenas navegação
- Lista de links: Início, Sobre, Projetos, Contato (âncoras #inicio, #sobre, #projetos, #contato)
- Botão/menu hamburguer para mobile (responsivo)

**Comportamento**:
- Navegação suave ao clicar (scroll-behavior smooth)
- Link ativo destacado ao rolar (opcional)
- Consistente entre tamanhos de tela (FR-014)

---

### 2. Hero/Apresentação (#inicio)
**Contrato**: Apresentação inicial com identidade.

**Elementos obrigatórios**:
- Nome completo: "Wesley Ferino de Carvalho"
- Formação: "6º período de Engenharia de Software - UNIVILLE"
- Idade: "21 anos" (ou formatado de forma natural)
- Frase de destaque: mencionar foco em IA aplicada a sistemas (FR-001, FR-013)

**Estrutura**: Títulos, texto curto, CTA opcional para "Ver Projetos" (#projetos)

---

### 3. Sobre (#sobre)
**Contrato**: Trajetória e história.

**Elementos obrigatórios**:
- Título "Sobre mim" / "Sobre"
- Parágrafo(s) com história (tecnologia/videogames → escola → Frontend → Hardware/Software → IA)
- Destaque: IA como área de maior interesse/motivação (FR-002)
- Lista de tecnologias/conhecimentos (FR-006) - pode ser em grid/tags

**Layout**: Texto + lista de skills organizada por categoria (backend/frontend/dados_ia/ferramentas)

---

### 4. Projetos (#projetos)
**Contrato**: Listagem de projetos com foco em IA.

**Elementos obrigatórios**:
- Título "Projetos"
- Cards para pelo menos 2 projetos (FR-003)

**Card de Projeto (contrato por card)**:
- Título do projeto (nome)
- Badge/indicador: "IA aplicada" ou destaque visível (destaqueIA true)
- Status: "Em desenvolvimento" (obrigatório quando status=em_desenvolvimento) - deve ser explícito
- Descrição completa (conforme modelo)
- Tags/tecnologias utilizadas
- Links (opcionais): GitHub/demo com ícone + abre em nova aba

**Projetos mínimos**:
1. Processamento de PDFs com RAG (destaque IA, status concluido)
2. Sistema Financeiro com IA (destaque IA, status em_desenvolvimento)

---

### 5. Contato (#contato)
**Contrato**: Canais profissionais.

**Elementos obrigatórios**:
- Título "Contato"
- Lista com 3 links: Email, LinkedIn, GitHub (FR-007)

**Link de Contato (contrato)**:
- Tipo: email | linkedin | github
- Rótulo visível
- URL/destino correto
- Ícone (opcional) + texto
- `target="_blank"` apenas para linkedin/github (FR-008)
- `rel="noopener noreferrer"` para todos links com target="_blank"

**Comportamento links externos**:
- LinkedIn/GitHub: abrem em nova aba, navegação original preservada
- Email: mailto: (sem _blank obrigatório)

---

## Comportamento Global

### Responsividade
- Mobile (<768px): menu hamburguer, layout empilhado, espaçamentos reduzidos
- Tablet (768–1023px): layout intermediário, grid 2 colunas para projetos/skills
- Desktop (>=1024px): layout expandido, espaçamentos amplos
- Sem overflow horizontal em 320px–1920px (SC-003)

### Navegação
- Scroll suave entre seções
- Âncoras funcionais (sem quebra de hash)
- Consistente entre tamanhos de tela (FR-009, FR-014)

### Interações e Animações (FR-011)
- Transições sutis (hover em cards/links, fade-in ao rolar - opcional)
- Não prejudicam acessibilidade (respeitar prefers-reduced-motion se implementado)
- Performance: CSS-only preferido

### Acessibilidade
- Navegação por teclado funcional
- Foco visível em elementos interativos
- Contraste adequado
- Alt text para imagens (se houver)
- Links com rótulo claro

### Idioma/Conteúdo
- 100% pt-BR (UI, labels, títulos, descrições) (SC-005)
- Tom: profissional, moderno, acessível, autêntico (FR-012)

## Contratos Não Aplicáveis

- Nenhum contrato de API (estático)
- Nenhum schema de dados dinâmicos (sem backend)
- Nenhum contrato CLI (web app)
- Nenhum contrato de eventos complexo (apenas interações UI)

## Validação

Este contrato é suficiente para guiar implementação e validação via quickstart.md. Estrutura declarativa, sem vazar detalhes CSS/JS específicos.
