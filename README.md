# Portfólio - Wesley Ferino de Carvalho

Site pessoal e profissional, estático e sem dependências, para apresentar trajetória, projetos e a aplicação prática de Inteligência Artificial em sistemas de software.

## Sobre

Portfólio pessoal e profissional de Wesley Ferino de Carvalho, estudante do 6º período de Engenharia de Software na Universidade da Região de Joinville (UNIVILLE).

O portfólio tem como foco principal apresentar minha trajetória, projetos e experiência prática em **Inteligência Artificial aplicada a sistemas de software**.

## Objetivo

Apresentar quem sou como pessoa e profissional, demonstrando meus projetos, conhecimentos e meu interesse em resolver problemas reais através da integração entre IA e desenvolvimento de software.

## Destaque: Inteligência Artificial

Meu principal diferencial está em aplicar Inteligência Artificial na resolução de problemas práticos, com foco em:

- **Chunking** para segmentar documentos em trechos com significado
- **Embeddings** para busca semântica e categorização
- **RAG (Retrieval-Augmented Generation)** para sistemas de perguntas e respostas
- **Machine Learning** para automação e análise de dados

## Projetos

- **Processamento de PDFs com RAG**: Sistema onde o usuário fornece um PDF e realiza perguntas em linguagem natural. Utiliza embeddings para localizar informações semanticamente relacionadas e fornecer respostas contextualizadas.
- **Sistema Financeiro com IA**: Sistema em desenvolvimento com integração à API do Telegram. Utiliza embeddings para categorização automática de gastos e geração de relatórios por período e categoria.

## Tecnologias

### Do site

- **HTML5** com marcação semântica e atributos ARIA
- **CSS3** com custom properties, grid, flexbox e `rem` para tipografia e espaçamento
- **JavaScript** vanilla, sem bibliotecas
- Sem build, bundler ou dependências: os arquivos são servidos exatamente como estão

### Dos projetos

- **Linguagens e Ferramentas**: Python, HTML, CSS, JavaScript, Git, GitHub
- **Back-end**: Flask, APIs REST
- **IA e Dados**: scikit-learn, embeddings, RAG, Machine Learning
- **Banco de Dados**: MySQL

## Estrutura

```
portifolio/
├── index.html            # Página única com todas as seções
├── css/
│   ├── styles.css        # Estilos base, tokens de design e componentes
│   └── responsive.css    # Media queries (480px, 768px e 1024px)
├── js/
│   └── main.js           # Menu mobile, navegação suave e seção ativa
├── assets/
│   ├── icons/            # Reservado para ícones em arquivo (os atuais são inline no HTML)
│   └── images/           # Reservado para imagens do portfólio
├── specs/                # Especificação, plano, tarefas e checklist de validação
└── README.md
```
## Validação rápida

Antes de publicar, conferir:

1. **Navegação** — os links do menu levam a cada seção e o header fixo não cobre o título.
2. **Menu mobile** — abre e fecha ao tocar no botão, ao tocar fora e ao pressionar ESC.
3. **Teclado** — percorra a página com Tab e confira o foco visível; o menu fecha com ESC.
4. **Contato** — LinkedIn e GitHub abrem em nova aba com `rel="noopener noreferrer"`; o email abre o cliente de e-mail.
5. **Responsividade** — sem rolagem horizontal entre 320px e 1920px; a fileira de Contato vira coluna abaixo de 480px.
6. **Acessibilidade** — respeito a `prefers-reduced-motion` e contraste suficiente nos textos.
7. **Console** — sem erros nem avisos no console do navegador.

O checklist completo está em `specs/001-portfolio-website/quickstart.md`.

## Contatos

- [LinkedIn](https://www.linkedin.com/in/ferinosz/)
- [GitHub](https://github.com/ferinoSZ)
- Email: [weslleycontas09@gmail.com](mailto:weslleycontas09@gmail.com)

## Desenvolvimento

Este projeto segue os princípios da sua Constituição:

- **Interface e documentação**: Português-BR
- **Código-fonte, identificadores e arquivos**: Inglês
- **Comentários**: Português-BR
- **Commits**: Inglês, seguindo Conventional Commits
- **Prioridade**: Simplicidade, manutenibilidade e acessibilidade

---

Desenvolvido por Wesley Ferino de Carvalho