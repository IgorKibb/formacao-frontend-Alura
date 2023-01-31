export class Personagem{
   nome
   vida = 100;
   mana = 100;
   #level //#identificador privado não, pode ser utilizado fora da classe. encapsulamento 
   tipo
   descricao
   //dentro de uma class só pode ter um metodo constructor
   constructor(nome){
      this.nome = nome;
      this.#level = 1;
      //this.vida = 100;
      //this.mana = 100;
   }

      aumentarLevel(){
         this.level += 1
      }

      diminuirLevel(){
         this.level -= 1
      }

   get level(){ //get associa a propriedade de um objeto à uma função. tornando uma propriedade privada em uma função publica.
      return this.#level
   }

   set level (novoLevel){ //set serve para auterar um valor de uma propriedade privada.
      if(novoLevel >= 1 && novoLevel <= 10){
         this.#level = novoLevel
      }
   }

   //nas class não precisa usar function antes de um método
   obterInsignia(){
      if(this.#level >= 5){
         return `Implacavel ${this.constructor.tipo}`;
      }
      return `${this.constructor.tipo} iniciante`;
   }

   static verficarVencedor(personagem1, personagem2){
      if(personagem1.level === personagem2.level){
         return 'Empate!!!'
      };
      if(personagem1.level > personagem2.level){
         return `${personagem1.constructor.tipo} ${personagem1.nome} é o vendecor!`
      };
      return `${personagem2.constructor.tipo} ${personagem2.nome} é o vendecor!`
   };
};