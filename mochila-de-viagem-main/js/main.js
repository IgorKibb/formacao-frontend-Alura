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

        itens[existe.id] = itemAtual; //para atullizar o localStorage é necessário sobrescrever, apagar o anterior.
    }else{
        itemAtual.id = itens.length;

        criaElemento(itemAtual);
        itens.push(itemAtual);
    };
    
    localStorage.setItem("itens", JSON.stringify(itens)); //armazenar dados no proprio navegador localStorage //localStorage só permite guardar string
// cookie e sessionStorage saber mais e como usá-los
    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item){
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
};

function atualizaElemento(item){
    document.querySelector("[data-id'"+item.id+"']").innerHTML = item.quantidade;
};