let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();
const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI(){
   const res = await fetch(endpointDaAPI)
   livros = await res.json(); //para transformar a resposta da requisição em json.
   let livrosComDesconto = aplicarDesconto(livros);
   exibirOsLivrosNaTela(livrosComDesconto);
};

function exibirOsLivrosNaTela(listaDeLivros){
   elementoParaInserirLivros.innerHTML = ''
   listaDeLivros.forEach(livro => {
     // let disponibilidade = verificarDisponibilidadeDoLivro(livro);
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'; //operador ternario.
      elementoParaInserirLivros.innerHTML += `
      <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
      <span class="tag">${livro.categoria}</span>
      </div>
      </div>
      `
   });
};

/*function verificarDisponibilidadeDoLivro(livro){
   if(livro.quantidade > 0){
      return 'livro__imagens';
   }else{
      return 'livro__imagens indisponivel'
   };
};*/