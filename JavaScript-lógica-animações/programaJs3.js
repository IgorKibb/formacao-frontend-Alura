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

/*<script>

    var aprendi = true;

    if(aprendi == true) {

        alert('O instrutor fica muito contente');
    } else {

        alert('O instrutor não vai desistir até você virar um cangaceiro!');
    }
</script>

Não há nenhuma novidade, aliás lidamos com códigos como esse no curso anterior. 
Nossa condição if testa se o valor da variável aprendi é verdadeira, ou seja, se é true. 
Usamos inclusive o operador ==.

No entanto, podemos simplificar esse código para:

<script>

    var aprendi = true;

    if(aprendi) {

        alert('O instrutor fica muito contente');
    } else {

        alert('O instrutor não vai desistir até você virar um cangaceiro!');
    }
</script>

Veja que não usei mais o operador ==. Você deve estar intrigado por ter funcionado. 
Primeiro, lembre-se que o if() espera receber true ou false para saber se executa o código do seu 
bloco ou o código do bloco do else. Se aprendi já é true, é redundante realizarmos o teste aprendi == true.

Se uma variável já guarda true ou false podemos usá-la diretamente no if poupando alguns caracteres. 
No entanto, se você se sente mais seguro com a forma anterior, continue com ela. 
O importante é você ir sentindo o que prefere e o que não prefere em programação. 
Até porque, não desejo que meus alunos sejam "carbonos" de mim.

Programar é uma arte e como toda arte começamos a enxergar beleza onde não havia.*/