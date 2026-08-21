# Mundo Disney — Integração com API

## Autor

* **Nome:** Murillo Ribeiro
* **Ano:** 2026

## 1. Identificação do projeto

* **Nome do projeto:** Mundo Disney
* **Instituição de ensino:** Senac-Es-Vila Velha
* **Unidade curricular:** UC8 - Desenvolver Aplicações Mobile
* **Professor(a):** Rafaela

---

## 2. Sobre o projeto

> Fizemos integração com a API da Disney, buscando os personagens do mundo Disney e mostrando em cards.

## 3. Estrutura do projeto

Apresente a organização dos arquivos e pastas do seu projeto.

**Exemplo:**

```text
mundo-disney/
│
├── index.html
├── css/
│   └── style.css
├── js/
│    └── script.js
├──fonts/
|    └── waltographUI.ttf
├── manifest.webmanifest
├── sw.js
├── README.md
└── 
```

### Descrição dos arquivos

| Arquivo      | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| `index.html` | A página principal do projeto, onde fica o contador e as divs.   |
| `css`        | A pasta onde fica organizado o css.                              |
| `style.css`  | Aparência da página,incluindo o Grid e os cards dos personagens. |
| `js`         | A pasta onde fica o script.js.                                   |
| `script.js`  | Faz a integração com a API, busca os personagens e cria os cards.|
| `fonts`      | A pasta onde fica o fonte da Disney.                             |
| `waltographUI.ttf`| Fonte da Disney.                                            |
| `manifest.webmanifest` | Informações para o PWA.                                |
| `sw.js`       | Service Worker.                                                 |
| `README.md`  |Contém as informações e a documentação do projeto.                |

> **Caso seu projeto possua outras pastas ou arquivos, apresente-os também na estrutura acima.**

---

## 💻 4. Tecnologias utilizadas

Liste as tecnologias utilizadas no desenvolvimento do projeto.

* HTML
* CSS
* JavaScript
* PWA
* Api da Disney
* Service Worker

---

## 5. API utilizada

### Nome da API

Disney API

### Endpoint utilizado

```text
https://api.disneyapi.dev/character
```

### Para que a API foi utilizada?

> A API foi utilizada para buscar os personagens da Disney e exibir essas informações no site em forma de cards.

### Quais informações foram consumidas?

> Foram utilizadas principalmente as informações do nome e da imagem do personagem.
---

## 6. Como executar o projeto

Explique passo a passo como outra pessoa pode executar seu projeto em outra máquina.

### Pré-requisitos

Seria Bom Baixar o projeto no VSCode e executar no navegador Chrome.
Um navegador, como Google Chrome, Microsoft Edge ou Opera.
Os arquivos do projeto.
Conexão com a internet para acessar a API.

### Passo a passo

* abra o VSCode.
* baixe ou copie os Arquivos do projeto.
* Abra a pasta mundo-disney.
* abra um arquivo index.html.
* abra um arquivo style.css.
* abra um arquivo script.js.
* abra o arquivo manifest.webmanifest.
* abra o arquivo sw.js.
* abra o arquivo README.md.
* execute o projeto no navegador Chrome.
* clique no botão carregar mais.

---

## 7. Como funciona a integração

Explique de forma objetiva e em até 10 passos como sua aplicação se comunica com a API.

1. O JavaScript define a URL da API da Disney.
2. A aplicação inicia na página 1.
3. É definido o limite de 50 personagens por página.
4. O JavaScript monta a URL utilizando a página atual.
5. O fetch() envia uma requisição para a API.
6. A resposta da API é convertida para JSON.
7. O programa percorre os personagens recebidos.
8. A função criarCard() cria um card para cada personagem.
9. A imagem e o nome são adicionados ao card.
10. Ao clicar em "Carregar mais", a aplicação busca a próxima página.

## 8. Desafios encontrados

Registre pelo menos um problema ou dificuldade que você encontrou durante o desenvolvimento e como resolveu

### Desafios encontrados

**Problema:**

> 1.Entender como pegar os dados retornados pela API.
> 2.Organizar os personagens em cards utilizando Grid.

**Como identifiquei o problema:**

> 1.Verificando o resultado da API no console.log().
> 2.Observando a estrutura do JSON para descobrir onde estavam o nome e a imagem dos personagens.

**Como resolvi:**

> 1.Utilizei um for para percorrer os personagens dentro de dados.data e chamei a função criarCard(personagem) para gerar cada card.
> 2.Criei as variáveis paginaAtual e personagensPorPagina para controlar as páginas e utilizei o botão Carregar mais para chamar novamente a função carregarPersonagens(), buscando a próxima página sem remover os cards anteriores.

---

## 9. Aprendizados

> Também aprendi a acessar informações específicas de um objeto, como name e imageUrl, e utilizar JavaScript para criar elementos HTML dinamicamente.
Além disso, aprendi a utilizar CSS Grid para organizar os personagens em vários cards de forma responsiva e a criar um sistema para carregar diferentes páginas de personagens através de um botão.

---
