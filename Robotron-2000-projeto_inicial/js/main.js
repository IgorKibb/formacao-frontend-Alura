const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
   elemento.addEventListener("click", (evento)=>{
      manipulaDados(evento.target.textContent);
   });
});


//somar.addEventListener("click", ()=>{manipulaDados("somar")});

//subtrair.addEventListener("click", ()=>{manipulaDados("subtrair")});

function manipulaDados(operacao){
   if(operacao === "-"){
      braco.value = parseInt(braco.value) - 1; //parseInt transforma string em em numero 
   }else{
      braco.value = parseInt(braco.value) + 1;
   };
};