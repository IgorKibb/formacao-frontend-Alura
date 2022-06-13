var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; //para manipular o conteudo de texto.

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <=0 || peso >=1000){ //validação
    console.log("peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Pesso inválido";
}
if (altura <=0 || altura >=3.00){
    console.log("altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if(pesoEhValido && alturaEhValida){ //outra validação
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
console.log(imc);