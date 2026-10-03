# Data Model: Portfólio de Wesley Ferino

**Feature**: portfolio-website
**Date**: 2026-10-01

## Entidades

### 1. Seção
Representa áreas do portfólio (Início, Sobre, Projetos, Contato).

| Campo | Tipo | Regras/Validação | Descrição |
|-------|------|-----------------|-----------|
| id | string | Obrigatório, único (slug kebab-case) | Identificador da seção (ex.: "inicio", "sobre", "projetos", "contato") |
| titulo | string | Obrigatório, pt-BR | Título exibido no menu e cabeçalho (ex.: "Sobre") |
| ordem | number | Obrigatório, >=1 | Ordem de exibição na navegação e página |
| visivel | boolean | Padrão: true | Se aparece no menu/navegação |
| anchor | string | Obrigatório | Âncora (#id) para navegação suave |

**Valores esperados**:
- inicio (ordem 1, #inicio)
- sobre (ordem 2, #sobre)
- projetos (ordem 3, #projetos)
- contato (ordem 4, #contato)

---

### 2. Projeto
Representa trabalho apresentado.

| Campo | Tipo | Regras/Validação | Descrição |
|-------|------|-----------------|-----------|
| nome | string | Obrigatório | Nome do projeto (ex.: "Processamento de PDFs com RAG") |
| descricao | string (texto longo) | Obrigatório, pt-BR | Descrição detalhada do projeto |
| tecnologias | string[] | Obrigatório, >=1 item | Lista de tecnologias utilizadas |
| destaqueIA | boolean | Obrigatório | Indica aplicação prática de IA (true para ambos) |
| status | enum('concluido' \| 'em_desenvolvimento') | Obrigatório | Status do projeto |
| links | Array<{tipo: 'github' \| 'demo' \| 'outros', url: string}> | Opcional | Links relacionados (GitHub, demo, etc.) |
| ordem | number | Obrigatório | Ordem de exibição na seção Projetos |

**Projetos definidos (dados estáticos)**:

1. **Processamento de PDFs com RAG**
- destaqueIA: true
- status: concluido (ou conforme implementação; acadêmico - pode ser concluido)
- tecnologias: ["embeddings", "RAG", "Python"] (complementar com Flask/scikit-learn conforme FR-006)
- descricao: PDF + perguntas em linguagem natural, embeddings para busca semântica, respostas, contexto universitário

2. **Sistema Financeiro com IA**
- destaqueIA: true
- status: em_desenvolvimento
- tecnologias: ["Telegram API", "embeddings", "Python", "Machine Learning"]
- descricao: Integração Telegram, categorização automática com embeddings, relatórios por período/categoria

---

### 3. Tecnologia
Representa competência técnica.

| Campo | Tipo | Regras/Validação | Descrição |
|-------|------|-----------------|-----------|
| nome | string | Obrigatório, único | Nome da tecnologia (ex.: "Python", "Flask", "RAG") |
| categoria | enum('backend' \| 'frontend' \| 'dados_ia' \| 'ferramentas') | Obrigatório | Categoria para organização visual |
| ordem | number | Opcional | Ordem de exibição por categoria |

**Lista (FR-006)**:
Python (backend/dados_ia), Flask (backend), scikit-learn (dados_ia), MySQL (dados_ia/ferramentas), APIs (backend), HTML (frontend), CSS (frontend), Git (ferramentas), GitHub (ferramentas), embeddings (dados_ia), RAG (dados_ia), Machine Learning (dados_ia)

---

### 4. Contato
Representa canal profissional.

| Campo | Tipo | Regras/Validação | Descrição |
|-------|------|-----------------|-----------|
| tipo | enum('email' \| 'linkedin' \| 'github') | Obrigatório, único | Tipo de contato |
| rotulo | string | Obrigatório, pt-BR | Label exibido (ex.: "LinkedIn", "GitHub") |
| url | string | Obrigatório (ou valor para mailto) | URL ou mailto:email@dominio.com |
| icone | string | Opcional | Nome/classe do ícone (SVG/FA) |
| abreEmNovaAba | boolean | Padrão: true (para linkedin/github), false (não aplicável) | Comportamento de abertura |
| ordem | number | Obrigatório | Ordem de exibição |

**Valores definidos**:
- email: tipo email, url mailto: (definir endereço real ou placeholder claro), abreEmNovaAba false
- linkedin: url perfil LinkedIn (público), abreEmNovaAba true
- github: url perfil GitHub, abreEmNovaAba true

**Notas**: URLs reais podem ser definidas na implementação (dados estáticos). Não incluir dados sensíveis.

## Relacionamentos

- Seção 1:N Navegação (menu aponta para seções)
- Projeto N:M Tecnologia (projeto usa várias tecnologias)
- Contato independente (lista simples)

## Estado

Dados 100% estáticos.
O modelo existe apenas para organizar o conteúdo do portfólio
e não representa uma estrutura de banco de dados ou API.

## Validação

- Todos campos obrigatórios preenchidos (dados estáticos)
- Links externos com `abreEmNovaAba=true` + `rel="noopener noreferrer"` (FR-008)
- Status "em_desenvolvimento" claramente indicado (FR-005, edge case)
- destaqueIA true para ambos projetos (FR-003, SC-008)
- Conteúdo 100% pt-BR conforme modelo

## Conformidade

Atende FRs 001-014 via estrutura de entidades. Sem implementação de código, apenas modelo de dados/conteúdo.
