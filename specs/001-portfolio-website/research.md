# Research: Portfólio de Wesley Ferino

**Feature**: Portfólio estático (HTML/CSS/JS)
**Date**: 2026-10-01

## Research Areas

### 1. Boas práticas para portfólio estático moderno

**Decision**: One-page (single-page) com seções ancoradas (Início, Sobre, Projetos, Contato). CSS vanilla + JavaScript vanilla, sem frameworks.

**Rationale**:
- Simplicidade e manutenibilidade (Constituição V)
- Performance otimizada (sem bundles pesados)
- Fácil de hospedar (estático)
- Foco no conteúdo (identidade + IA)

**Alternatives considered**:
- Multi-página: mais complexo, overhead de navegação; descartado (escopo simples)
- Frameworks (React/Vue): adicionam complexidade/despendências sem benefício claro; descartado

---

### 2. Navegação suave e acessibilidade

**Decision**: Navegação por âncoras (#sobre, #projetos, #contato) com scroll suave via CSS (`scroll-behavior: smooth`) + fallback JS se necessário. Incluir links de navegação com foco visível.

**Rationale**:
- Suave, sem JS pesado
- Acessível (suporta teclado, sem bloquear navegação padrão)
- Consistente entre telas (FR-009, FR-014)

**Alternatives considered**:
- Scroll via JS com offset manual: mais código, propenso a bugs; CSS suficiente

---

### 3. CSS responsivo (Mobile-First)

**Decision**: Abordagem Mobile-First com breakpoints: mobile (<768px), tablet (768px–1023px), desktop (>=1024px). Usar Flexbox/Grid, unidades relativas (rem, %, vw) e evitar overflow horizontal.

**Rationale**:
- Atende SC-003 (320px–1920px)
- Performance melhor no mobile
- Clareza e manutenibilidade

**Alternatives considered**:
- Desktop-first: menos otimizado para mobile; mobile-first preferido

---

### 4. Tipografia e legibilidade

**Decision**: Fonte system font stack ou Google Fonts leve (ex.: Inter, Roboto, Source Sans Pro). Tamanhos escalonáveis (rem), line-height adequado, contraste alto.

**Rationale**:
- Legibilidade em todos dispositivos
- Performance (system fonts) ou carregamento mínimo
- Transmite estética moderna/tecnológica (Requisito 8)

**Alternatives considered**:
- Fontes pesadas: impacto em performance; evitar

---

### 5. Performance e animações

**Decision**: Animações sutis com CSS transitions/animations (fade-in, hover em cards). Sem vídeos/autoplay pesado. Evitar layout shifts.

**Rationale**:
- FR-011 (contribuem para UX, sem prejudicar desempenho)
- Performance Goals (<1s, 60fps)

**Alternatives considered**:
- Animações JS pesadas (GSAP): dependência externa desnecessária

---

### 6. Acessibilidade básica (WCAG A)

**Decision**: Contraste mínimo adequado, foco visível em links/botões, alt text em imagens (se existirem), links externos com aria-label ou indicação clara, sem depender apenas de cor.

**Rationale**:
- Alinha com Princípio II (acessibilidade)
- Boas práticas, não intrusivo

**Alternatives considered**: WCAG AAA - complexo para v1, desnecessário

---

### 7. SEO básico (opcional mas útil)

**Decision**: Meta tags básicas (title, description, viewport). Title descritivo: "Wesley Ferino - Desenvolvedor de Software | IA aplicada a sistemas".

**Rationale**: Facilita descoberta por recrutadores (público-alvo)

**Alternatives considered**: Schema markup completo - não necessário

## Resumo

Sem NEEDS CLARIFICATION pendentes. Decisões simples, estáticas, alinhadas com Constituição (simplicidade + manutenibilidade). Tecnologias: HTML5, CSS3, JS ES6+ vanilla.

**Conclusão**: Pronto para Fase 1 (Design).
