const pessoa = {
   nome : "Luma",
   profissao : "Engeheira"
};

console.log(pessoa.nome);

console.log(pessoa.telefonse);

//podemos adicionar propriedades depois, como no exemplo abaixo.
pessoa.telefone = "11 222333444";

console.log(pessoa.telefone);

//podemos alterar e adicionar novos atributos no objeto.
/*foi alterado e atualizado o objeto.
a const não permite alterar um objeto einteiro, mas partes dele*/
pessoa.nome = "Luma Silva";

console.log(pessoa);

//a const não permite alterar um objeto einteiro, mas partes dele*/
/*const novaPessoa = {
   nome : "Pedro",
};

pessoa = novaPessoa;
console.log(pessoa);*/

//Se quisermos, por exemplo, remover a propriedade aliado, 
//podemos utilizar o operador delete:
/* exemplo:
delete pessoa.nome;
assim: console.log(pessoa.nome) undefined
ou podemos deletar como colchete, ex: delete pessoa["nome"]*/