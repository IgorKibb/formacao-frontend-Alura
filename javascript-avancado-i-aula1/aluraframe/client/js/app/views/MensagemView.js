class MensagemView extends View{
   constructor(elelemnto){
      super(elemento);
   };

   template(model){
      return model.texto ? `<p class="alert lert-info">${model.texto}</p>` : '<p></p>';
   };
   

};