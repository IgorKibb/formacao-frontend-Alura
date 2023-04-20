const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio){
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
};

function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
};

let x = 20; //tem que ser declarado fora.
function atualizaTela(){
    limpaTela();
    desenhaCirculo(x, 20, 10);
    x++;
    
};

setInterval(atualizaTela, 10); //intervalo de tempo para a função ser chamada.

//o for processa muito rápido, por isso não é o mais adequado.
/*for (let x = 20; x < 600; x++){ //x++ === x = x + 1.
    limpaTela();
    desenhaCirculo(x, 20, 10); //como parâmetros o coodernada x e y + o raio do círculo.
};*/