//componente para criar o formulário para inserir uma nova tarefa
//import do css

import "./ToDoForm.css"
import { useState } from "react"


const ToDoForm = ({addTarefa}) => {
    //estando para armezenar o valor do input (campo para inserir a tarefa)
    const [tarefa, seTarefa] = useState("");
    //definir o useState => usa a memoria local do navegador para armezenar as mudanças de estado
    //[primeiro campo o armazenamento, segundo campo a função de mudança de estado]


    //função para atualizar o estado com o valor do input
    const handleSubmit = (e) => {
        //impedir o comportamento padrão do formulário
        e.preventDefault();
        //verificar se o campo não esta vazio
        if(tarefa.trim()!=="") {
            //adicionar a tarefa ao array de tarefas
            addTarefa(tarefa);
            //limpo o campo do input
            seTarefa("");
        }
    };


    return(
        //retornar o formulário (o view)
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Insira uma nova Tarefa"
            value={tarefa}
            onChange={(e) => seTarefa(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default ToDoForm;

//componente para criar o formulario para inserir uma nova tarefa
//pode ser reutilizado em outros componentes (export)