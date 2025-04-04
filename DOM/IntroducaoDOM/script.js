// Manipulação de Html

// Exemplo de uso do DOM
function testeDOM() {
    document.getElementById("titulo").innerText = "Texto Alterado";
}

// Selecionado Elementos
// getElementById()

let titulo = document.getElementById("titulo");
console.log(titulo);

titulo.style.color = "purple"; // mudando a cor pra roxo

// getElementByClassName()
let descricao = document.getElementsByClassName("descrição"); //vetor -> array
console.log(descricao);

descricao[1].style.fontWeigth = "bold";
descricao[2].style.color = "green";

// getElementByTag() -> vetor
let tituloH3 = document.getElementsByTagName("h3");
tituloH3[0].style.color = "red";

// getElementByName -> vetor



//querySelector -> Tag("tag"); Class(".class"); ID ("#id")
// query selector -> variavel simples
let primeiroH1 = document.querySelector("h1");
primeiroH1.innerText = "Meu Teste de DOM";

// querySelectorAll -> vetor
let todoParagrafo = document.querySelectorAll("p");
todoParagrafo.forEach( x =>
    x.style.fontSize = "18px"
);