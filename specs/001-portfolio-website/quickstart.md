# Quickstart: Validação do Portfólio de Wesley Ferino

**Feature**: portfolio-website
**Date**: 2026-10-01

## Objetivo

Guia executável para validar end-to-end o portfólio, comprovando que atende todos os requisitos (FRs) e critérios de sucesso (SCs) da especificação.

## Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Arquivos do projeto: `index.html`, `css/styles.css`, `css/responsive.css`, `js/main.js` (conforme estrutura planejada)
- Acesso local para abrir arquivo HTML (file://) ou servidor estático local (opcional)

## Setup

1. Navegar até raiz do repositório
2. Abrir `index.html` diretamente no navegador OU servir localmente:

```bash
# Opção 1: Python
python -m http.server 8000
# Abrir http://localhost:8000

# Opção 2: Node (npx)
npx serve .
```

## Cenários de Validação

### 1. Identidade (FR-001, SC-001)

**Dado**: Página inicial carregada  
**Quando**: Visualizar seção Hero/Início  
**Então**:
- [ ] Nome completo "Wesley Ferino de Carvalho" visível
- [ ] Idade "21 anos" visível
- [ ] Formação "6º período de Engenharia de Software - UNIVILLE" visível
- [ ] Foco em IA aplicada a sistemas evidente (SC-001: identificado em < 10s)

**Verificação**: Cronometrar visualização - deve ser imediato.

---

### 2. Trajetória/Sobre (FR-002, FR-012, SC-007)

**Dado**: Seção #sobre  
**Quando**: Ler conteúdo  
**Então**:
- [ ] História apresenta: interesse inicial (tecnologia/videogames), contato na escola, evolução Frontend → Hardware/Software → IA
- [ ] IA destacada como maior interesse/motivação
- [ ] Tom em português-BR: profissional, moderno, acessível, autêntico (sem excessivamente corporativo/formal)
- [ ] Transmite curiosidade, comprometimento, flexibilidade, disposição para aprender (SC-007)

---

### 3. Projetos com Foco em IA (FR-003, FR-004, FR-005, SC-004, SC-008)

**Dado**: Seção #projetos  
**Quando**: Visualizar cards  
**Então**:
- [ ] Pelo menos 2 projetos apresentados (SC-004)
- [ ] **Projeto 1 - Processamento de PDFs com RAG**:
  - [ ] Nome correto
  - [ ] Destaque IA visível (destaqueIA true)
  - [ ] Descreve: PDF + perguntas linguagem natural, embeddings, busca semântica, respostas, contexto universitário
  - [ ] Tecnologias listadas (embeddings, RAG)
- [ ] **Projeto 2 - Sistema Financeiro com IA**:
  - [ ] Nome correto
  - [ ] Destaque IA visível
  - [ ] Descreve: integração Telegram API, embeddings p/ categorização automática, relatórios por período/categoria
  - [ ] Status "Em desenvolvimento" explícito (não sugere concluído)
- [ ] Diferencial IA aplicado a sistemas reais evidente ao ler Sobre+Projetos (SC-008)

---

### 4. Tecnologias e Conhecimentos (FR-006)

**Dado**: Seção Sobre ou seção dedicada  
**Quando**: Visualizar lista de skills  
**Então**:
- [ ] Python, Flask, scikit-learn, MySQL, APIs, HTML, CSS, Git, GitHub, embeddings, RAG, Machine Learning presentes
- [ ] Organização clara (categorias opcional)

---

### 5. Contatos (FR-007, FR-008, SC-002)

**Dado**: Seção #contato  
**Quando**: Testar links  
**Então**:
- [ ] Link Email presente (mailto:) e funcional
- [ ] Link LinkedIn presente, abre em nova aba (`target="_blank"`), com `rel="noopener noreferrer"`
- [ ] Link GitHub presente, abre em nova aba (`target="_blank"`), com `rel="noopener noreferrer"`
- [ ] 100% clicáveis e direcionam corretamente (SC-002)
- [ ] Rótulos claros em pt-BR

**Teste prático**: Clicar cada link - validar destino e que aba original não é perdida indevidamente.

---

### 6. Navegação e Comportamento (FR-009, FR-014, SC-006)

**Dado**: Qualquer seção  
**Quando**: Navegar entre âncoras (menu + CTA)  
**Então**:
- [ ] Links de menu levam às seções corretas (#inicio, #sobre, #projetos, #contato)
- [ ] Scroll suave (sem salto abrupto) (SC-006)
- [ ] Navegação fluida e intuitiva
- [ ] Comportamento consistente entre tamanhos de tela (FR-014)

---

### 7. Responsividade (FR-010, SC-003)

**Dado**: Diferentes viewports  
**Quando**: Redimensionar janela  
**Então**:

**Mobile (360x640 / ~320-480px)**:
- [ ] Layout empilhado, legível
- [ ] Sem overflow horizontal
- [ ] Menu acessível (hamburguer se presente)
- [ ] Espaçamentos adequados

**Tablet (768x1024)**:
- [ ] Layout intermediário, cards reorganizados
- [ ] Sem quebra de conteúdo
- [ ] Navegação funcional

**Desktop (1280x720 / >=1024px)**:
- [ ] Layout expandido, aproveita espaço
- [ ] Elementos bem distribuídos
- [ ] Sem overflow horizontal

**Critério**: Válido em 320px até 1920px (SC-003). Testar pelo menos 3 breakpoints.

---

### 8. Interações e Animações (FR-011)

**Dado**: Elementos interativos (links, cards, menu)  
**Quando**: Hover/focus  
**Então**:
- [ ] Transições sutis (não bruscas)
- [ ] Não prejudicam legibilidade/desempenho
- [ ] Foco visível ao navegar por teclado
- [ ] Animações não bloqueiam interação

---

### 9. Qualidade/Validação Final (Princípio VII, SC-005)

**Dado**: Todo o site  
**Quando**: Revisão geral  
**Então**:
- [ ] 100% conteúdo em português-BR (SC-005) - títulos, labels, descrições, navegação
- [ ] Sem textos em inglês na UI (exceto nomes técnicos quando apropriado, mas UI/docs pt-BR)
- [ ] Sem erros visíveis (quebras, sobreposição)
- [ ] Contraste legível
- [ ] Diferencial (IA aplicada a sistemas reais) fica evidente (SC-008)
- [ ] Percepção: profissional, comprometido, flexível, curioso, aberto a aprender (SC-007)

## Checklist de Conformidade com Constituição

- [ ] **I. Identidade**: Apresentada completa
- [ ] **II. Design**: Distintivo, acessível, não excessivamente corporativo
- [ ] **III. Foco IA**: Primário, evidente em projetos
- [ ] **IV. Convenções**: UI pt-BR (validado), código inglês (estrutural), comentários pt-BR no código
- [ ] **V. Simplicidade**: Sem complexidade desnecessária, vanilla
- [ ] **VI. Responsividade**: Validada em 3 viewports
- [ ] **VII. Qualidade**: Todos itens validados antes de considerar completo

## Critérios de Aprovação

**TODOS os itens acima devem estar marcados [x]** para considerar a feature completa conforme especificação.

**Observações**:
- Projeto "Sistema Financeiro com IA" DEVE manter status "Em desenvolvimento" explícito.
- Links externos SEMPRE com `rel="noopener noreferrer"` quando `target="_blank"`.
- Tom deve ser acessível, sem parecer engessado (conforme requisito 10).

## Próximos Passos

Após validação aprovada: prosseguir para `/speckit.tasks` para gerar plano de tarefas de implementação.
