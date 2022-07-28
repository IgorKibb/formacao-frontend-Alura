class Negociacao {
   constructor (data, quantidade, valor){
      this._data = data; // para colocar automaticamente a data do sistema.
      this._quantidade = quantidade;
      this._valor = valor;
      Object.freeze(this);
   };
   get Volume(){ //funções dentro de uma classe são chamadas de métodos.
      return this._quantidade * this._valor;
   };
   get Data(){ //prefixo get método acessador.
     return new Date(this._data.getTime()); 
   };
   get Quantidade(){
      return this._quantidade;
   };
   get Valor(){
      return this._valor;
   };
};

// Object.freeze(n1) congela um objeto, não podendo alterá-lo