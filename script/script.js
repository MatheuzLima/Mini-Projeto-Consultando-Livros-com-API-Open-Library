const livrosDiv = document.getElementById('livros');
const isbnSelect = document.getElementById('isbnSelect');
const buscarBtn = document.getElementById('buscarBtn');

async function buscarLivro(isbn) {

    if (!isbn) {
        alert('Selecione um livro válido!');
        return;
    }

    try {
        const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        const book = data[`ISBN:${isbn}`];

        if (!book) {
            alert(`Livro com ISBN ${isbn} não encontrado.`);
            return;
        };

        const title = book.title || 'Titulo não disponível!';
        const authors = book.authors
            ? book.authors.map(a => a.name).join(', ')
            : 'Autor não disponível';

        const img = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
        const publish_date = book.publish_date || 'Ano desconhecido';
        const number_of_pages = book.number_of_pages;

        const div = document.createElement('div');

        div.className = 'livro fade-ind'

        div.innerHTML = `

            <img src="${img}" alt="${title}">

            <div class="livro-info">
            <h3>${title}</h3>
            <p>${authors}</p>
            <p>${publish_date}</p>
            <p>${number_of_pages}</p>
            </div>
            `;
            
            livrosDiv.innerHTML = '';
            livrosDiv.appendChild(div);

    } catch (error) {

        console.error('Erro ao buscar livro', error);
        alert('Ocorreu um erro ao buscar as informações.');

    };
};

buscarBtn.addEventListener('click', ()=>{

    const isbn =isbnSelect.value;
    buscarLivro(isbn);

});