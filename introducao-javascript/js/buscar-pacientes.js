var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest(); //objeto que serve para fazer requisições http
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){ // .status = para saber o status de uma requisição, neste caso o 2000 siginifica que deu tudo bem.
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta) // para transformar json em array.
            pacientes.forEach(function(paciente) {
                adicionaPacientesNaTabela(paciente);
            });
        }else{
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});