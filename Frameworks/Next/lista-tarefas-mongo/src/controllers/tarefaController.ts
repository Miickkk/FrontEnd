

// Funçoes do Controller 

import Tarefa, { ITarefa } from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";

//get -> pega as tarefas do banco e retrona em um vetor de tarefas
export const getAllTarefas = async(): Promise<ITarefa[]> => {
    await connectMongo();//estabelece a conexão 
    const tarefas = await Tarefa.find({}); //pega todas as tarefas da coleção tarefas
    return tarefas; //retrona um vetor de tarefas
}

//post -> insere uma tarefa na coleção (id é inserido automaticamente)
export const createTarefa = async (data: Partial<ITarefa>): Promise<ITarefa> =>{
    await connectMongo();
    const tarefa = await Tarefa.create(data);
    return tarefa; //retorna a tarefa com o ID
}

//patch -> passo o id + o que será alterado
export const updateTarefa = async(id: string, data: Partial<ITarefa>): Promise<ITarefa | null> =>{
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id, data, {
        new: true, runValidators: true
    });
    return tarefa; //retorna a tarefa já atualizada
}

//delete
export const deleteTarefa = async(id:string):Promise<boolean> =>{
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id:id});
    return resultado.deletedCount>0;
}