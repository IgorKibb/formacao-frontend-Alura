import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
   elementoMagico
   levelMagico
   inteligencia
   tipo = 'Mago'

   constructor(nome, level, elementoMagico, levelMagico, inteligencia){
      super(nome, level) //extends e super //extends herda de outra classe e super herda o constructor do extends
      this.elementoMagico = elementoMagico;
      this.levelMagico = levelMagico;
      this.inteligencia = inteligencia;
   };

   obterInsignia(){
      if(this.levelMagico >= 5 && this.inteligencia >= 5){
         return `Mestre do ${this.elementoMagico}`
      };
      return super.obterInsignia(); //classe pai, ou seja, a class Personagem
   };
};
