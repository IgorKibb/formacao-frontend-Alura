const dados = require("./cliente.json"); //require é uma função do node?? [REVER]
/* para acessar unicamente um atributo de um json, podemos utilizar o .
como fazemos no js. exemplo: console.log(dados.email)*/

//transformar objeto json em string.
const clienteEmString = JSON.stringify(dados);


//para transformar string em json.
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente)