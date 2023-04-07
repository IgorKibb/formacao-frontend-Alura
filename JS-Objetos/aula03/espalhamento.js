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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
   console.log(`Ligando para ${telefoneComercial}`);
   console.log(`Ligando para ${telefoneResidencial}`);
};

/*spread ou ... é a sintaxe de espalhamento*/
ligaParaCliente(...cliente.telefone);


const encomenda = {
   destinatario: cliente.nome,
   ...cliente.enderecos[0],
};

console.log(encomenda)