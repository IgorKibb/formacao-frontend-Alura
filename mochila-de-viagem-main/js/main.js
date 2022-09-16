const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []; //para pegar os dados do localStorage

itens.forEach((elemento)=>{
    criaElemento(elemento);
});


form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);
    //Com o método find(), ele procura um elemento e, com o operador 
    //de comparação ===, ele compara se o valor e tipo de dois elementos são idênticos.
    
    const itemAtual = {
        "nome" : nome.value,
        "quantidade" : quantidade.value
    };

    if(existe){
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual; //para atullizar o localStorage é necessário sobrescrever, apagar o anterior.
    }else{
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0; //operador ternario, se positivo uma coisa, se negativo outra.

        criaElemento(itemAtual);
        itens.push(itemAtual);
    };
    
    localStorage.setItem("itens", JSON.stringify(itens)); //armazenar dados no proprio navegador localStorage //localStorage só permite guardar string
// cookie e sessionStorage saber mais e como usá-los
    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item){
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);
};

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
};

function botaoDeleta(id){
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "X"; //o texto do botao.

    elementoBotao.addEventListener("click", function() {//arrow function nao permite o this abaixo
        deletaElemento(this.parentNode, id)
    });

    return elementoBotao;
};

function deletaElemento(tag, id){
    tag.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
    localStorage.setItem("itens", JSON.stringify(itens));
};