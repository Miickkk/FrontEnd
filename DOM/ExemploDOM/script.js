// Exemplo de uso do DOM 


// header -> DOM
let header = document.createElement("div");
document.body.appendChild(header); //adidiconar a header dentro do body
header.style.backgroundColor = "purple";
header.style.height = "8vh";

let menu = document.createElement("div");
header.appendChild(menu);
header.classList.add("header");
menu.classList.add("menu");

let menuItens = ["Início", "Produtos", "Contato"];
menuItens.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    menu.appendChild(item);
});
menu.style.display = "flex";
menu.style.justifyContent = "space-around";
menu.style.alignItems = "center";
menu.style.color = "white";
menu.style.height = "100%";
menu.style.fontSize = "4vh";