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

/*in pega o valor de cada uma da chave cliente.
é possivel fazer o mesmo com forEach?*/
for (let chave in cliente){
   let tipo = typeof cliente[chave];
   if (tipo !== 'object' && tipo !== 'function'){ //só vai retornar o que não for objeto e função
      console.log(`a chave ${chave} tem o valor ${cliente[chave]}.`);
   };
};