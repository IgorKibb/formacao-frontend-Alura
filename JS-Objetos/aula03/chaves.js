const cliente = {
   nome: "João",
   idade: 24,
   email: "joa@firma.com",
   telefone: ["11555555505", "11444444404"],
};

cliente.enderecos = [
   {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamaneto: true, //booleano
      complemento: "ap 934",
   },
];

/*retorna uma array com todas as chaves do objeto*/
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
   console.error("Erro. É necessário um enederço cadastrado.");
};