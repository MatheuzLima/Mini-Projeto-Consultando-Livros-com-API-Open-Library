# Mini Projeto - Consultando Livros com a API Open Library 📚

## Descrição

Projeto simples de frontend que consulta a **Open Library API** para buscar informações sobre livros (título, autor, capas e detalhes). A interface permite pesquisar livros por termo (título, autor ou ISBN) e exibir resultados de forma responsiva.

Link: https://api-openlibrary.netlify.app/

---

## Tecnologias usadas 🔧

- **HTML5**
- **CSS3** (arquivo: `css/style.css`)
- **JavaScript** (arquivo: `script/script.js`)
- **Open Library API** (consulta pública de metadados de livros)

---

## Pré-requisitos ✅

- Navegador moderno (Chrome, Edge, Firefox, Safari)
- Git (opcional, para clonar o repositório)
- Servidor HTTP local recomendado (opcional, para evitar restrições de CORS ao abrir arquivos diretamente). Exemplo: [Live Server do VS Code] ou Python 3 (`python -m http.server`).

> Observação: Como é um projeto estático, você pode abrir `index.html` direto no navegador, mas usar um servidor local evita problemas em alguns ambientes.

---

## Etapas — Instruções de instalação 🛠️

1. Clone o repositório ou baixe o ZIP:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd Mini-Projeto-Consultando-Livros-com-API-Open-Library
```

2. Abra a pasta no seu editor (opcional):

```bash
code .
```

3. Inicie um servidor local (opcional):

```bash
# Com Python 3
python -m http.server 8000

# Ou usando o Live Server do VS Code (extensão)
```

4. Abra no navegador:

```
http://localhost:8000
```

---

## Instruções de uso 🚀

1. Na página principal (`index.html`), selecione um termo de busca (livro) no seletor de pesquisa.
2. Clique em **Buscar**
3. Os resultados aparecerão com título, autor e, quando disponível, a capa do livro.

Dica: Edite `script/script.js` para alterar parâmetros de busca, formatar resultados ou adicionar novos campos exibidos.

---

## Estrutura de pastas 📁

```
Mini-Projeto-Consultando-Livros-com-API-Open-Library/
├─ index.html
├─ README.md
├─ css/
│  └─ style.css
└─ script/
	└─ script.js
```

---

## Licença

Distribuído sob a licença [**MIT**](./LICENSE) `LICENSE`

---