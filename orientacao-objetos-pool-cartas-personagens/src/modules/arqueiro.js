import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem{
   static tipo = 'Arqueiro'; //Métodos estáticos não são chamados na instâncias da classe.
   destreza;
   static descricao = 'Você tem o meu arco!'

   constructor(nome, destreza){
      super(nome);
      this.destreza = destreza;
   };

   obterInsignia(){
      if(this.destreza >= 5){
         return `Dominador de flechas`
      };
      return super.obterInsignia();
   };
};