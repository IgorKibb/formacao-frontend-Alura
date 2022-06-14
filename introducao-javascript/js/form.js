var botaoAdicionar = document.querySelector("#adicionar-paciente");//sempre lembrar da tralha ou ponto do id ou classeS
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); //previne o comportamento padrão
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);
    
    var erros = validaPaciente(paciente);
    if(erros.length > 0 ){
        exibeMensagemDeErro(erros);
        return; //return vazio para sair imediatemante da função.
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // colocar o novo paciente na tabela
    form.reset(); //para resetar os campos do formulario.

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});
function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //innerHTML controla um elemento interno da html.

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form){
    var paciente = { //entre as chaves se cria um objeto
        nome: form.nome.value, //nos objetos colocamos dois pontos para atribuir o valor + a virgula no final
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

    //var nome = form.nome.value; //pra capturar o valor do imput
    //var peso = form.peso.value;
    //var altura = form.altura.value;
    //var gordura = form.gordura.value;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // criar um elemento tr no html
    pacienteTr.classList.add("paciente");

    //var nomeTd = document.createElement("td");
    //nomeTd.classList.add("info-nome");
    //nomeTd.textContent = paciente.nome;

    //var nomeTd = montaTd(paciente.nome, "info-nome");
    //var pesoTd = montaTd(paciente.peso, "info-peso"); // mesma função do var acima
    //var alturaTd = montaTd(paciente.altura, "info-altura");
    //var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    //var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //refatorando o codigo acima
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = []; //array

    if(paciente.nome.length == 0){
        erros.push("O nome nao pode ficar em branco");
    }
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido"); // empurra para para o  array.
    // quando o if for simples como neste caso, então podemos remosver as chaves e colocar na mesma linha.
    
    if(!validaAltura(paciente.altura)){
     erros.push("Altura inválida");
    }
    if(paciente.gordura.length == 0){
        erros.push("Deve preencher o campo de gordura");
    }
    if(paciente.altura.length == 0){
        erros.push("Preencha os campos abaixo.");
    }
    if(paciente.peso.length == 0){
        erros.push("Preencha os campos abaixo.");
    }
    return erros;
}