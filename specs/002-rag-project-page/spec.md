# Feature Specification: Página de Detalhe do Projeto de PDFs com RAG

**Feature Branch**: `002-rag-project-page`

**Created**: 2026-10-03

**Status**: Draft

**Input**: User description: "Quero criar uma nova página dentro do portifolio/ em /projetos/rag" - página de detalhe do projeto "Processamento de PDFs com RAG", acessível por link direto, sem alteração da página inicial, divulgando de forma explícita que a resposta é extraída literalmente do documento e não gerada por modelo de linguagem.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Entender o que o sistema entrega e por que ele recusa (Priority: P1)

Um recrutador ou visitante chega à página por link direto e precisa, rapidamente, compreender que o sistema localiza e devolve o trecho literal de um PDF que responde à pergunta, e que essa escolha é deliberada.

**Why this priority**: É o núcleo da proposta. Sem essa clareza, a página vale tanto quanto um card de texto genérico e o diferencial real do projeto - a ausência de geração de texto - fica oculto.

**Independent Test**: Abrir a rota da página e ler apenas o título, os selos e os parágrafos de abertura, sem rolar até o fim. Deve ser possível responder "o que ele entrega?" e "a resposta é escrita por um modelo de linguagem?".

**Acceptance Scenarios**:

1. **Given** visitante chega por link direto na página do projeto, **When** visualiza o título e os parágrafos de abertura, **Then** entende que o usuário envia um PDF, faz uma pergunta em linguagem natural e recebe o trecho exato do documento com o título da seção e a página de origem.
2. **Given** visitante lê a abertura, **When** procura saber se a resposta é gerada por um modelo de linguagem, **Then** encontra de forma explícita que a resposta é extraída literalmente do documento e não gerada.
3. **Given** visitante lê a abertura, **When** procura o motivo dessa escolha, **Then** encontra as duas consequências declaradas: imunidade a manipulação de instruções por construção e execução sem envio do documento a serviços externos.

---

### User Story 2 - Entender o funcionamento sem saber programar (Priority: P1)

Um visitante que não atua com programação precisa entender, em linguagem corrente, como o sistema vai do arquivo PDF até a resposta, sem ser impedido por nomes de biblioteca, de modelo ou por valores de ajuste.

**Why this priority**: É o que distingue uma demonstração de domínio real de uma lista de palavras-chave. Uma explicação que apenas outro programador entende cumpre o requisito técnico e falha como comunicação.

**Independent Test**: Abrir a página e ler apenas a visão geral do funcionamento, parando antes da seção de detalhes técnicos; deve ser possível responder "o que acontece com o meu PDF?" e "o sistema inventa resposta?" sem conhecimento prévio.

**Acceptance Scenarios**:

1. **Given** visitante na seção de funcionamento, **When** percorre a visão geral, **Then** encontra a sequência completa em linguagem corrente: o documento é lido, dividido em trechos que respeitam suas seções, cada trecho recebe uma representação do seu significado, a pergunta é comparada com essas representações, os candidatos são conferidos e a resposta é validada.
2. **Given** visitante não programa, **When** lê a visão geral, **Then** compreende cada etapa pelo seu efeito prático, sem depender de nome de biblioteca, de modelo, de valor de ajuste ou de termo de arquitetura.
3. **Given** visitante quer conferir a implementação, **When** segue para a seção de detalhes técnicos, **Then** encontra as técnicas, os modelos e os valores de cada etapa, em uma seção distinta e posicionada depois da visão geral.
4. **Given** visitante chega à última etapa, **When** lê a descrição da validação, **Then** entende que o sistema pode se recusar a responder e que existem critérios objetivos para essa recusa.

---

### User Story 3 - Descobrir que o projeto tem uma página de detalhe (Priority: P1)

Um visitante olha os cards de projetos e não tem como saber, só pela aparência, que um deles tem muito mais conteúdo disponível. Ele precisa perceber a pista visual, clicar e cair numa página que aprofunda o projeto.

**Why this priority**: Sem esta pista, todo o conteúdo da página de detalhe é inacessível. O cartão passa a ser uma entrada, e não um resumo.

**Independent Test**: Abrir a seção de projetos, observar o card do projeto de PDFs e clicar em uma área do cartão que não seja o título; verificar que a página de detalhe abre.

**Acceptance Scenarios**:

1. **Given** visitante na seção de projetos, **When** observa os cards, **Then** o card do projeto de PDFs apresenta uma indicação explícita de que há mais a ver.
2. **Given** visitante na seção de projetos, **When** clica em qualquer área do card do projeto de PDFs, **Then** a página de detalhe desse projeto abre.
3. **Given** visitante na seção de projetos, **When** percorre os dois cards, **Then** o card do projeto que ainda não tem página indica essa condição em vez de prometer navegação.

---

### User Story 4 - Reconhecer decisões de engenharia, não apenas ferramentas (Priority: P2)

Um leitor mais experiente quer entender o raciocínio por trás das escolhas técnicas e o que foi deliberadamente descartado.

**Why this priority**: Demonstra maturidade técnica e é o material que sustenta uma conversa de entrevista.

**Independent Test**: Localizar a lista de decisões e verificar que cada item explica um "porquê" ou uma alternativa rejeitada, em vez de apenas nomear uma ferramenta.

**Acceptance Scenarios**:

1. **Given** visitante lê as decisões de engenharia, **When** percorre os itens, **Then** encontra, no mínimo: recusa em vez de resposta inventada, divisão de trechos ciente da estrutura do documento, cascata de dois modelos e execução local sem acelerador gráfico.
2. **Given** visitante lê um item sobre recusa, **When** procura detalhe, **Then** encontra os motivos de recusa que o sistema apresenta ao usuário.

---

### User Story 5 - Conferir as tecnologias e alcançar o código (Priority: P2)

Um recrutador quer validar as afirmações conferindo o código-fonte do projeto.

**Why this priority**: Autoriza a página: é o que transforma uma narrativa em alegação verificável.

**Independent Test**: Clicar no acesso ao código e conferir se abre o repositório público correto em nova aba; conferir a lista de tecnologias apresentada.

**Acceptance Scenarios**:

1. **Given** visitante na seção de tecnologias, **When** clica no acesso ao código, **Then** o repositório público do projeto abre em nova aba, sem substituir a página nem permitir que o destino controle a janela de origem.
2. **Given** visitante na seção de tecnologias, **When** lê a lista apresentada, **Then** encontra as tecnologias efetivamente usadas, incluindo as de IA e dados, de API e de interface.

---

### User Story 6 - Ler em qualquer dispositivo e com teclado (Priority: P2)

Um visitante usa celular, tablet ou desktop e pode navegar por teclado ou por tecnologia assistiva.

**Why this priority**: Os princípios de design acessível e de responsividade são não negociáveis e se aplicam integralmente a uma página nova.

**Independent Test**: Redimensionar a janela entre 320px e 1920px e percorrer a página apenas com a tecla de tabulação; depois inspecionar a página com leitor de tela.

**Acceptance Scenarios**:

1. **Given** em tela de celular, **When** visualiza a página, **Then** o texto permanece legível, sem rolagem horizontal e sem que o título fique encoberto pelo cabeçalho fixo.
2. **Given** em tela de desktop, **When** visualiza a página, **Then** o título recebe destaque progressivo em relação ao celular e as ações ficam alinhadas lado a lado.
3. **Given** visitante percorre a página com a tecla de tabulação, **When** chega a cada link e botão, **Then** visualiza um indicador de foco claramente perceptível.
4. **Given** leitor de tela ativo, **When** o visitante percorre a página, **Then** os títulos são anunciados em ordem e sem salto de nível, e a seção de tecnologias é identificada pelo seu título.
5. **Given** visitante prefere movimento reduzido, **When** navega pela página, **Then** as transições são suprimidas.

---

### User Story 7 - Sair da página e percorrer o restante do portfólio (Priority: P3)

Um visitante quer voltar ao portfólio ou conferir a seção de projetos sem perder o contexto.

**Why this priority**: Fecha o ciclo de navegação. Por decisão de escopo a página não recebe entrada na página inicial, portanto precisa oferecer saídas claras por conta própria.

**Independent Test**: A partir da página, ativar cada item do cabeçalho e a ação de retorno; todos devem levar ao destino correspondente do portfólio.

**Acceptance Scenarios**:

1. **Given** visitante na página do projeto, **When** ativa um item do menu principal, **Then** é levado á seçáo correspondente do portfõlio e a página exibe o conteúdo da seçáo.
2. **Given** visitante na página do projeto, **When** usa a ação de retorno, **Then** retorna à seção de projetos do portfólio.
3. **Given** visitante na página do projeto, **When** ativa o logotipo, **Then** retorna ao início do portfólio.

---

### Edge Cases

- **Acesso direto sem passar pela página inicial**: a página pode ser aberta por URL colada, favorito ou link externo. Deve funcionar de forma idêntica, com todas as saídas de navegação disponíveis.
- **Cabeçalho fixo sobre o título**: a página não possui área de destaque visual que cubra o cabeçalho fixo; o título não pode ficar encoberto no carregamento nem ao navegar por âncora.
- **Cabeçalho sem seção correspondente**: nesta página não existe item de menu que represente a seção atual. O menu deve permanecer funcional e coerente, sem exibir um item ativo indevido nem falhar ao percorrer as seções do próprio documento.
- **Afirmação técnica incorreta**: qualquer valor numérico, nome de modelo ou limite apresentado precisa ser conferível no projeto de origem. Afirmação não verificável é defeito, não detalhe de redação.
- **Leitura como propaganda**: o termo "RAG" sugere geração de texto por modelo de linguagem. A página precisa tornar a extração literal explícita logo na abertura, e não em nota de rodapé ou seção oculta.
- **Conteúdo técnico extenso**: as descrições de funcionamento podem ser longas e devem permanecer escaneáveis, com títulos de seção e separadores visuais entre blocos.
- **Destino externo sinalizado**: o acesso ao código é um destino externo e precisa ser perceptivelmente identificado como tal, não apresentado como navegação interna.
- **Termos técnicos em inglês no texto em português-BR**: termos consagrados permanecem em inglês, sem violar a exigência de interface em português-BR.
- **Área clicável ampliada para o card inteiro**: a ação de abrir a página de detalhe abrange toda a área do card. Isso não pode bloquear a seleção de texto do resumo nem sobrepor o card vizinho.
- **Projeto sem página de detalhe**: um card pode exibir o mesmo tratamento visual dos demais e ainda assim não ter para onde levar. A indicação de continuação nesse caso deve refletir a ausência de destino, e não criar um destino inexistente.
- **Visual removido dos cards**: o diagrama que ilustrava o fluxo de cada projeto foi retirado dos cards por decisão de design. A seção de projetos passa a ser composta apenas por texto e rótulos, e nenhum requisito desta especificação reintroduz imagem, ícone ou ilustração nos cards.
- **Leitor de tela diante do card ampliado**: um único link por card precisa continuar sendo anunciado uma única vez, com o título do projeto como nome, sem repetir conteúdo nem incorporar a indicação visual.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Sistema DEVE disponibilizar uma página de detalhe própria para o projeto de processamento de PDFs com busca semântica, acessível na rota `/projetos/rag`.
- **FR-002**: Sistema DEVE conectar a página de detalhe ao card correspondente na página inicial, por meio de um único link no título do projeto, sem alterar o texto, os selos ou a ordem dos cards.
- **FR-003**: Sistema DEVE identificar o projeto com título e com selos de destaque em IA e de status, coerentes com a identidade do portfólio.
- **FR-004**: Sistema DEVE descrever, na abertura, o fluxo principal: envio de PDF, pergunta em linguagem natural e devolução do trecho exato com o título da seção e a página de origem.
- **FR-005**: Sistema DEVE declarar explicitamente, na abertura, que a resposta é extraída literalmente do documento e não gerada por modelo de linguagem.
- **FR-006**: Sistema DEVE apresentar as consequências dessa escolha como diferencial: imunidade a manipulação de instruções por construção e execução sem envio do documento a serviços externos.
- **FR-007**: Sistema DEVE apresentar o funcionamento como etapas sequenciais, na ordem real de execução, cobrindo extração do PDF, divisão em trechos que respeitam as seções do documento, comparação por significado, conferência dos candidatos e validação.
- **FR-008**: A explicação do funcionamento DEVE existir em dois níveis: uma visão geral em linguagem corrente, compreensível por quem não programa, e uma seção de detalhes técnicos que identifique nominalmente as técnicas, os modelos e os valores usados em cada etapa.
- **FR-009**: Sistema DEVE apresentar decisões de engenharia com justificativa ou alternativa rejeitada, incluindo recusa em vez de resposta inventada, divisão de trechos ciente da estrutura do documento, cascata de dois modelos e execução local sem acelerador gráfico.
- **FR-010**: Sistema DEVE informar os motivos de recusa que o sistema apresenta ao usuário.
- **FR-011**: Sistema DEVE apresentar a lista de tecnologias efetivamente utilizadas no projeto, cobrindo IA e dados, API e interface.
- **FR-012**: Sistema DEVE oferecer acesso ao código-fonte público do projeto, abrindo em nova aba e protegendo a janela de origem contra controle pelo destino.
- **FR-013**: Sistema DEVE oferecer retorno à seção de projetos do portfólio e navegação completa para todas as seções a partir do cabeçalho da página.
- **FR-014**: Sistema DEVE manter a identidade visual do portfólio, reutilizando a mesma paleta, tipografia, componentes de etiqueta e botão e a mesma alternância de fundo entre seções.
- **FR-015**: Sistema DEVE declarar que o projeto foi desenvolvido em equipe.
- **FR-016**: Todo valor numérico, nome de modelo ou limite apresentado DEVE ser verificável no projeto de origem, e a página DEVE omitir qualquer afirmação de acurácia, recuperação ou benchmark que o projeto de origem não possua.
- **FR-017**: Sistema DEVE apresentar todo o texto visível em português-BR, preservando em inglês apenas termos técnicos consagrados.
- **FR-018**: Sistema DEVE manter coerência entre o card do projeto já publicado na página inicial e o título e o status apresentados na nova página.
- **FR-019**: O card de um projeto que possui página de detalhe DEVE responder ao clique em toda a sua área, por meio de um único link por card, sem aninhar links e sem criar destinos que não existem.
- **FR-020**: O card DEVE exibir uma indicação explícita de continuação. Projeto que possui página DEVE indicar que há mais a ver; projeto que não possui DEVE indicar essa condição e não pode sugerir navegação.
- **FR-021**: A visão geral do funcionamento DEVE ser escrita em linguagem corrente, sem jargão de implementação: sem nomes de biblioteca, de modelo ou de técnica, sem valores numéricos de ajuste e sem analogia com arquitetura de software. A precisão técnica pertence à seção de detalhes.
- **FR-022**: A seção de detalhes técnicos DEVE ficar posicionada após a visão geral, de modo que um leitor não técnico possa compreendê-lo sem passar por ela.

### Key Entities *(include if feature involves data)*

- **Projeto**: trabalho apresentado no portfólio. Atributos: nome, resumo, contexto, status, destaque em IA, tecnologias, acesso ao código.
- **Etapa de funcionamento**: etapa sequencial do sistema. Atributos: ordem, nome, descrição, técnica ou modelo utilizado.
- **Decisão de engenharia**: escolha técnica com justificativa. Atributos: título, justificativa, alternativa rejeitada.
- **Tecnologia**: competência ou ferramenta empregada no projeto. Atributos: nome, categoria (IA e dados, API, interface).
- **Ação de navegação**: destino oferecido pela página. Atributos: rótulo, destino, comportamento (interno, externo, nova aba).
- **Card de projeto**: resumo de um projeto na página inicial. Atributos: título, selos, resumo, tecnologias, indicação de continuação, destino (quando existe página de detalhe).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um visitante sem contexto prévio responde corretamente "o que o sistema entrega?" e "a resposta é escrita por um modelo de linguagem?" após ler apenas a abertura da página.
- **SC-002**: 100% das etapas reais de funcionamento do sistema aparecem na página, na ordem de execução, sem etapa omitida nem inventada.
- **SC-003**: 100% dos valores numéricos, nomes de modelo e limites apresentados na página são conferíveis no projeto de origem.
- **SC-004**: A página não apresenta nenhuma métrica de desempenho ou qualidade que o projeto de origem não possua.
- **SC-005**: Todos os itens do menu principal e a ação de retorno levam ao destino correto, e 100% dos destinos externos abrem em nova aba com proteção contra controle da janela de origem.
- **SC-006**: Não há rolagem horizontal nem conteúdo encoberto pelo cabeçalho fixo em nenhuma largura entre 320px e 1920px.
- **SC-007**: Todos os elementos interativos são alcançáveis por teclado e exibem indicador de foco perceptível.
- **SC-008**: A hierarquia de títulos é percorrida por leitor de tela sem salto de nível e sem título duplicado.
- **SC-009**: 100% do texto visível está em português-BR, com exceção limitada a termos técnicos em inglês.
- **SC-010**: A página consome a mesma quantidade de recursos externos que o restante do portfólio, sem introduzir fontes, scripts ou serviços adicionais.
- **SC-011**: Clicar em qualquer área do card do projeto de PDFs abre a página de detalhe correspondente.
- **SC-012**: Nenhum card da seção de projetos apresenta destino inexistente ou promessa de navegação para conteúdo que ainda não existe.
- **SC-013**: Tecnologias assistivas anunciam o card uma única vez, com o título do projeto como nome acessível, e não leem a indicação de continuação como conteúdo.
- **SC-014**: 100% das etapas da visão geral do funcionamento é compreendida por um leitor sem formação em programação, verificado por não conter nome de biblioteca, nome de modelo, valor de ajuste ou termo de arquitetura antes da seção de detalhes técnicos.
- **SC-015**: A seção de detalhes técnicos aparece depois da visão geral e contém as técnicas, os modelos e os valores de cada etapa, de modo que nada comprobável seja perdido com a simplificação.

## Assumptions

- **Escopo de navegação**: a página inicial passa a oferecer entrada para a página de detalhe, por meio do card do projeto correspondente. Os demais cards da seção não recebem destino enquanto não houver página para eles.
- **Projeto de origem**: o conteúdo é descritivo de um projeto real de processamento de PDFs; nenhuma alteração no projeto de origem está em escopo.
- **Sem avaliação publicada**: o projeto de origem não possui conjunto de avaliação nem métricas de qualidade, portanto a página não apresenta números de acurácia. Se forem medidos futuramente, isso será um requisito novo.
- **Repositório público**: o código do projeto está publicado e acessível publicamente, e a página pode apontar para ele.
- **Sem dependências novas**: a página reutiliza os recursos já existentes do portfólio, sem introduzir novas bibliotecas, fontes ou serviços.
- **Sem imagens**: a versão atual não inclui capturas de tela nem ilustrações nos cards. Se forem adicionadas capturas, exigem texto alternativo.
- **Versionamento**: o projeto ainda não está sob controle de versão, portanto a referência a branch não se aplica e os arquivos seguem o padrão de nomenclatura já existente.
- **Idioma e convenções**: seguem a Constituição - interface e documentação em português-BR, código e identificadores em inglês, comentários em português-BR.