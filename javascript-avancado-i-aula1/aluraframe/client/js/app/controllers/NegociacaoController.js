class NegocicaoController {
   
   constructor(){
      let $ = document.querySelector.bind(document); //bind serve para manter a função do querrySElector.
      this._inputData = $('#data'); //o $ aqui ja está chamando a função do querySelector, mais ou mens igual no jquerry.
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
      this._listaNegociacoes = new ListaNegociacoes();
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
      /*let negociacao = new Negociacao(
         helper.textoParaData(this._inputData.value),
         this._inputQuantidade.value,
         this._inputValor.value
      );*/
      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._limpaFormulario();

      //this._listaNegociacoes.negociacoes.length = 0; //uma maneira de vaziar uma array!!
      //this._listaNegociacoes.negociacoes.push(this._criaNegociacao);
      
   };
   _criaNegociacao(){
      return new Negociacao(
         helper.textoParaData(this._inputData.value),
         this._inputQuantidade.value,
         this._inputValor.value);
   };
   _limpaFormulario(){
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;

      this._inputData.focus();
   };
};