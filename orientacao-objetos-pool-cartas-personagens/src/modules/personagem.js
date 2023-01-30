export class Personagem{
   nome
   vida = 100;
   mana = 100;
   level
   tipo
   descricao
   //dentro de uma class só pode ter um metodo constructor
   constructor(nome, level){
      this.nome = nome;
      this.level = level;
      //this.vida = 100;
      //this.mana = 100;

   }
   //nas class não precisa usar function antes de um método
   obterInsignia(){
      if(this.level >= 5){
         return `Implacavel ${this.tipo}`;
      }
      return `${this.tipo} iniciante`;
   }
};