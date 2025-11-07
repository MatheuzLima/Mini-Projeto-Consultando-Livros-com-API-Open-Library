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







































// ############ Estudo Try Catch async await API - 2 ############
// async function buscarDadosAPI() {
//     try {

//         console.log('Iniciando a requisição de dados...');

//         const resposta = await fetch('http://jsonplaceholder.typicode.com/posts/1');

//         if (!resposta.ok) {
//             throw new Error(`Erro de HTTP | Status: ${resposta.status}`);
//         };

//         const dados = await resposta.json();

//         console.log('Dados recebidos com sucesso');
//         console.log(dados);

//         return dados;

//     } catch (error) {

//         console.error(`❌ Erro capturado: ${error.message}`);
//         // console.error(error.message);
//         return null

//     } finally {

//         console.log('✅ Requisição Finalizada');
//     };
// };
// buscarDadosAPI()

// ############ Estudo Try Catch - 1 ############
// function verificarNumero(valor) {
//     try {
//         if (typeof valor != 'number') {
//             throw new Error("O valor fornecido não é um número")
//         }
//         if (valor < 0) {
//             throw new Error("Números negativos não são permitidos")
//         }
//         let resultado = valor * 2
//         console.log(`✅ Resultado: ${resultado}`)
//     } catch (error) {
//         console.error('❌ Erro capturado');
//         console.error(error.message);
//     } finally {
//         console.log('✅ Execução Finalizada')
//     }
// }
// verificarNumero(8);
// verificarNumero("dez");
// verificarNumero(-8); 


