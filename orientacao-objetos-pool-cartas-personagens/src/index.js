import { Personagem } from "./modules/personagem.js"; //sempre lembrar de colocar a extenção .js
import { PersonagemView } from "./components/personagem-view.js";

//primeiro fiz a classe acima, depois criei a variavel chamnando como novo personagem
//trazendo assim suas categorias sem precisar recriá-las manualmente.
//as propriedades nas aspas vêm do constructor so arquivo personagem.js
const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('Jose', 3, 'Arqueiro');

const personagens = [personagemPedrinho, personagemJose]; //array

new PersonagemView(personagens).render();

console.log(personagemJose.mana)