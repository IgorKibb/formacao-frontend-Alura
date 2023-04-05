const cliente = {
   nome : "André",
   idade : 32,
   cpf : "11112222333",
   email : "andre@dominio.com"
};

//para acessar uma chave especifica, podemos usar um operador com .
console.log(`O nome do cliente é ${cliente.nome} e a tem ${cliente.idade} anos.`);

//posso usar um método dentro do objeto, como abaixo que está usando o médoto 
//substring.
console.log(`Os três primeiros digítos do CPF são ${cliente.cpf.substring(0, 3)}`)