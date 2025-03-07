// Parte 1 - Exibir no console

let titulo = document.getElementById("titulo");
let paragrafo = document.querySelector(".paragrafo");

console.log(titulo);
console.log(paragrafo);


// Parte 2 

function mudarTexto() {
  titulo.innerText = "Novo Título";
  paragrafo.innerText = "Novo Parágrafo";
}


// Parte 3

function mudarFundo() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "purple"
}


// Parte 4

function adicionarClasse() {
  titulo.classList.add("descricao");
  document.querySelector(".descricao").style.color = "yellow"
}