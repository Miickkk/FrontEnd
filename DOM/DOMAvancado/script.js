// Estudos Avançados de DOM

// Clonar e Mover
function duplicarCard() {
  let card = document.getElementById("card");
  let novoCard = card.cloneNode(true);
  document.body.appendChild(novoCard);
}

// Mudança de Estilo - ClassList . add / remove
let dark = false;

document.getElementById("darkMode").addEventListener("click", mudarEstiloFundo);

function mudarEstiloFundo() {
  let btn = document.getElementById("darkMode");
  if (dark === false) {
    document.body.classList.add("darkMode");
    dark = true;
    btn.innerText = "Modo Claro";
  } else {
    document.body.classList.remove("darkMode");
    dark = false;
    btn.innerText = "Escuro Escuro";
  }
}


//Captura de Eventos do Teclado
document.addEventListener("keydown", function (event) {
  console.log("Tecla Pressionada: " + event.key);
});


// Exemplo e Uso de Eventos do Teclado
let sugestoes = ["JavaScript", "Java", "Python", "C++", "PHP", "Ruby"];

document.getElementById("busca").addEventListener("keyup", function () {
  let termo = this.value.toLowerCase();
  let lista = document.getElementById("sugestoes");
  lista.innerHTML = "";

  sugestoes.forEach((sugestao) => {
    if (sugestao.toLowerCase().includes(termo)) {
      let item = document.createElement("li");
      item.innerText = sugestao;
      lista.appendChild(item);
    }
  });
});


// Validação de Formulários -> DOM
document.getElementById("formCadastro").addEventListener(
    "sunmit", function(event){
        event.preventDefault();

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem");
        if (nome === "" || email === "") {
            mensagem.innerText = "Todos os Campos Devem ser Preenchidos";
            mensagem.style.color = "red";
        } else {
            mensagem.innerText = "Cadastro Enviado com Sucesso!"
            mensagem.style.color = "purple";
        }
        nome = "";
        email = "";
    }
);
