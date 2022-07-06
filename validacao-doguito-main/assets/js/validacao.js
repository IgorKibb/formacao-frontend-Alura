/*const dataNascimento = document.querySelector('#nascimento');
dataNascimento.addEventListener('blur', (evento) =>{ //o evento blur é quando a gente perde o foco no campo a ser escrito.
   validaDataNascimento(evento.target);
});*/

export function valida(input){
   const tipoDeInput = input.dataset.tipo;

   if(validadores[tipoDeInput]){
         validadores[tipoDeInput](input);
   };

   if(input.validity.valid){
      input.parentElement.classList.remove('input-container--invalido');
      input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
   }else{
      input.parentElement.classList.add('input-container--invalido');
      input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensgemDeErro(tipoDeInput, input);
   };
};

const tiposDeErro = [
   'valueMissing',
   'typeMismatch',
   'patternMismatch',
   'customError'
]; //vetor [REVER]

const mensagensDeErro = {
   nome: {
      valueMissing: 'O campo nome não pode estar vazio.'
   },
   email: {
      valueMissing: 'O campo de email não pode estar vazio.',
      typeMismatch: 'O email digitado não é válido.'
   },
   senha: {
      valueMissing: 'O campo de senha não pode estar vazio.',
      patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
   },
   dataNascimento: {
      valueMissing: 'O campo de data de nascimento não pode estar vazio.',
      customError: 'Você deve ser maior que 18 anos para se cadastrar'
   }
}


const validadores = {
   dataNascimento:input => validaDataNascimento(input)
};

function mostraMensgemDeErro(tipoDeInput, input){
   let mensagem = '';
   tiposDeErro.forEach(erro => {
      if(input.validity[erro]){
         mensagem = mensagensDeErro[tipoDeInput][erro]
      };
   });

   return mensagem;
};

function validaDataNascimento(input){
   const dataRecebida = new Date (input.value); // para pegar apenas o valor da data.
   let mensagem = '';

   if(!maiorQue18(dataRecebida)){ //! para tornar a condição negativa.
      mensagem = 'Você deve ser maior que 18 anos para se cadastrar';
   };

   input.setCustomValidity(mensagem);
};

function maiorQue18(data){
   const dataAtual = new Date(); //para colocar a data do dia, não precisa colocar o valor, assim ele colocará automaticamente.
   const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());//getUTCDate pega o dia.
   return dataMais18 <= dataAtual;
};