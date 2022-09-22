async function buscaEndereco(cep){
   var mensagemErro = document.getElementById('erro');
   mensagemErro.innerHTML = "";
   try{
      var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)//fetch assínocro e obrigatório o API como este.
      var consultaCEpConvertida = await consultaCEP.json(); //await só é permmitido dentro de uma função async!!
      if(consultaCEpConvertida.erro){
         throw Error('CEP não existente!');
      }
      var cidade = document.getElementById('cidade');
      var logradouro = document.getElementById('endereco');
      var estado = document.getElementById('estado');

      cidade.value = consultaCEpConvertida.localidade;
      logradouro.value = consultaCEpConvertida.logradouro;
      estado.value = consultaCEpConvertida.uf;

      return consultaCEpConvertida;
   }catch(erro){
      mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente.</p>`;
   }
};

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value)); //focusout é quando clica fora do campo do formulário.



//CÓDIGO ANTIGO:
/*.then(resposta => resposta.json())
.then(r=>{
   if(r.erro){
      throw Error('Esse CEP não existe!')
   }else
   console.log(r)
   })
   
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluido'));*/ //finally = finalmente, ou seja, para imprimir a conclusão de um processo do qual se foi solicitado.