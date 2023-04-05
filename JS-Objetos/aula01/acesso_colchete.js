const cliente = {
   nome : "André",
   idade : 32,
   cpf : "11112222333",
   email : "andre@dominio.com"
};

//também podemos acessar uma propriedade através de colchecte, como no exmplo abaixo.
console.log(`O nome do cliente é ${cliente["nome"]} e a tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email"];


//o exemplo acima é muito utilizado quando não sabmeos todas as propriedades, como
// mostra o exemplo abaixo.
chaves.forEach((chave) => {
   console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});
/*ele vai cuspir isso no terminal:
A chave nome tem valor André
A chave idade tem valor 32
A chave cpf tem valor 11112222333
A chave email tem valor andre@dominio.com*/