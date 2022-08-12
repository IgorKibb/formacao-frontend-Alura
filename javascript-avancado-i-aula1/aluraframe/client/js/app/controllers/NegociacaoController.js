class NegocicaoController {
   
   constructor(){
      let $ = document.querySelector.bind(document); //bind serve para manter a função do querrySElector.
      this._inputData = $('#data'); //o $ aqui ja está chamando a função do querySelector, mais ou mens igual no jquerry.
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
   }; //evitar de percorrer o DOM inúmeras vezes!!!

   adiciona (event){
      event.preventDefault();
      let helper = new DateHelper();

      //let data = new Data(this._inputData.value.split('-')); // mesma dunção abaixo
      //let data = new Data(this._inputData.value.replace(/-/g, ','));

     /* let data = new Data(...
         this._inputData.value
         .split('-')
         .map((item, indice) => item - indice %2) //%significa módulo //map é um callback?
         //arrow function, saber mais.
           // if(indice == 1){
             //  return item - 1;
            //}*
      );*/ //spread oparetor ... entende ue o array tem que ser desmembrado.
      let negociacao = new Negociacao(
         helper.textoParaData(this._inputData.value),
         this._inputQuantidade.value,
         this._inputValor.value
      );
   };
};