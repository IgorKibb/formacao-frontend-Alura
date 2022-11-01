function aplicarDesconto(livros){
   const desconto = 0.3;
   livrosComDesconto = livros.map(livro => {
      return {...livro, preco: livro.preco - (livro.preco * desconto)} //...cópia de um objeto para outro objeto.
   });
   return livrosComDesconto;
};