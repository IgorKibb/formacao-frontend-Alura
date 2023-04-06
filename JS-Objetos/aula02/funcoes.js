/*também podemos armazenar funções dentro de objetos, como no exemplo abaixo:*/

const cliente = {
   nome: "João",
   idade: 24,
   email: "joa@firma.com",
   telefone: ["11555555505", "11444444404"],
   saldo: 200,
   efetuaPagamento: function (valor) {
      if(valor > this.saldo ){ //this representa a instância do objeto que está tranalhando.
         console.log("Saldo insuficiente.");
      }else{
         this.saldo -= valor;
         console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
      }
   }
};

/*chama a função colocando como parametro o valor do pagamento*/
cliente.efetuaPagamento(25);