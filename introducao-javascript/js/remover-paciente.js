var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //var alvoDoEvento = event.target;
    //var paiDoAlvo = alvoDoEvento.parentNode; //tr
    //paiDoAlvo.remove();
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){ //segurar um tempo até acontecer o proxmo evento.
        event.target.parentNode.remove();
    },500); //milesegundos
    
    //event.target.parentNode(); //nó pai
    
    // remover apenas o alvo do clique.
});

//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){ ////dblclick = double click
//        this.remove();
//    });
//});