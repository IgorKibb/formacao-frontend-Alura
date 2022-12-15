import ehUmCPF from "./valida-cpf.js";
const campsoDoFormulario = document.querySelectorAll("[required]");

campsoDoFormulario.forEach((campo) => {
   campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo){
   if(campo.name == "cpf" && campo.value.length >= 11){
      ehUmCPF(campo);
   };
};