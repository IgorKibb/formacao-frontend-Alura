async function buscaEndereco(cep){
   try{
      var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)//fetch assínocro e obrigatório o API como este.
      var consultaCEpConvertida = await consultaCEP.json(); //await só é permmitido dentro de uma função async!!
      if(consultaCEpConvertida.erro){
         throw Error('CEP não existente!');
      }
      return consultaCEpConvertida;
   }catch(erro){

   }
};



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