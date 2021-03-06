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

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido){ //validação // exclmação é o sinal para tornar algo em negacao, ou seja, neste caso esta perguntando se o peso não for valído
        console.log("peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido"); // mesma função que a debaixo, pórem da forma correta de alterar a estilização.
        //paciente.style.backgroundColor = "lightcoral"; //para alterar a estilização do html
    }
    if (!alturaEhValida){
        console.log("altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
       // paciente.style.backgroundColor = "lightcoral";
    }

    if(pesoEhValido && alturaEhValida){ //outra validação
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >=0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc (peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); //para delimitar a quantidade de casas decimais toFixed.;
}