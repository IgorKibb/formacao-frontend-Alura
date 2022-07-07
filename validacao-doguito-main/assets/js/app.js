import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
   input.addEventListener('blur', (evento) => {

      if(input.dataset.tipo === 'preco' ){
         SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
         })
      };

      valida(evento.target);
   });
});