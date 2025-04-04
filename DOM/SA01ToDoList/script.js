// Lista de Tarefas (ToDoList)

// dispara o evento
document.getElementById("btnAdicionar").addEventListener("click", criarTarefa);

function criarTarefa() {
    let input = document.getElementById("tarefa");

    // remove os espaços antes e depois do texto
    let texto = input.value.trim();

    // verificar se a tarefa não esta vazia
    if(texto==="") {
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = texto + '<button onclick = "removerTarefa(this)">Remover</button>';

    // adicionar o li -> ul
    let ul = document.getElementById("lista");
    ul.appendChild(li);
    
    input.value = "";
}

function removerTarefa(botao) {
    botao.parentElement.remove
}
