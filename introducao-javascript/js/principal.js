var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; //para manipular o conteudo de texto.

var pacientes = document.querySelectorAll(".paciente"); //querrSelectorAll irá retornar uma array de todos os elementos que tem essa classe ou id

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];//um pequeno "truque", criando a variável paciente, que será um atalho para pacientes[i] assim, não se faz necessário adiconar [i] encada paciente que o loop fizer.
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
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido"); // mesma função que a debaixo, pórem da forma correta de alterar a estilização.
        //paciente.style.backgroundColor = "lightcoral"; //para alterar a estilização do html
    }
    if (altura <=0 || altura >=3.00){
        console.log("altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
       // paciente.style.backgroundColor = "lightcoral";
    }

    if(pesoEhValido && alturaEhValida){ //outra validação
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); //para delimitar a quantidade de casas decimais toFixed.
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");//sempre lembrar da tralha ou ponto do id ou classeS
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); //previne o comportamento padrão
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value; //pra capturar o valor do imput
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr"); // criar um elemento tr no html

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // colocar o novo paciente na tabela
});