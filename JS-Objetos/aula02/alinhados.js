const cliente = {
   nome: "João",
   idade: 24,
   email: "joa@firma.com",
   telefone: ["11555555505", "11444444404"],
};

//para criar um objeto dentro de outro objeto.
//também podemos adicionar diretamente.
cliente.endereco = {
   rua: "R. joseph Climber",
   numero: 1337,
   apartamaneto: true, //booleano
   complemento: "ap 934",
};

console.log(cliente.endereco.complemento);