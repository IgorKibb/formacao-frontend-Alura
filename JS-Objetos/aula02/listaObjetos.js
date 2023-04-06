const cliente = {
   nome: "João",
   idade: 24,
   email: "joa@firma.com",
   telefone: ["11555555505", "11444444404"],
};

/*podemos fazer uma array de vários objetos, basta add colchetes, como 
no exemplo abaixo*/
cliente.enderecos = [
   {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamaneto: true, //booleano
      complemento: "ap 934",
   },
];

/*método push é um método de array, empurrar algo pra dentro do array*/
cliente.enderecos.push({
   rua: "R. Joseph Ledder",
   numero: 404,
   apartamaneto: false, //booleano
});

/*filter também é um método de arrays*/
//está pedindo que liste apenas os endereços que são apartamentos.
const listaApenasApartamentos = cliente.enderecos.filter(
   (endereco) => endereco.apartamaneto === true
);

console.log(listaApenasApartamentos);