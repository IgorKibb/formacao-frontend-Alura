import { Personagem } from "./modules/personagem.js"; //sempre lembrar de colocar a extenção .js
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

//primeiro fiz a classe acima, depois criei a variavel chamnando como novo personagem
//trazendo assim suas categorias sem precisar recriá-las manualmente.
//as propriedades nas aspas vêm do constructor so arquivo personagem.js
//const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
//const personagemJose = new Personagem('Jose', 3, 'Arqueiro');

const arqueiroBruno = new Arqueiro('Bruno', 7, 8);
const magoAntonio = new Mago('Antonio', 4, 'fogo,', 4, 3);
const magaJulia = new Mago('Júlia', 8, 'gelo', 7, 10);
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8);
const guerreiroJorge = new Guerreiro('Jorge', 8)

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroJorge]; //array

new PersonagemView(personagens).render();

//console.log(Personagem.verficarVencedor(arqueiroMagoChico, magoAntonio))
console.log(arqueiroMagoChico)