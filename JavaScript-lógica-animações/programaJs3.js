const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

function exibeCirculo(evento){

   const x = evento.pageX - tela.offsetLeft; /*pegar as coodernadas. 
   o offseft é pra tirar o padding e margin do browser e foacar apenas no canvas.*/
   const y = evento.pageY - tela.offsetTop;
   pincel.fillStyle = 'blue';
   pincel.beginPath();
   pincel.arc(x, y, 10, 0, 2 * 3.14);
   pincel.fill();

   console.log(x + ` e ` + y);
};

tela.onclick = exibeCirculo; //sem parentêses, pois os parenteses ativam a função.