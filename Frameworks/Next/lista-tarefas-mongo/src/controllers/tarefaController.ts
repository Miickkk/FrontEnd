

// Funçoes do Controller 

import Tarefa, { ITarefa } from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";

//get
export const getAllTarefas = async(): Promise<ITarefa[]> => {
    await connectMongo();
    const tarefas = await Tarefa.find({});
    return tarefas;
}

//post
export const createTarefa = async (data: Partial<ITarefa>): Promise<ITarefa> =>{
    await connectMongo();
    const tarefa = await Tarefa.create(data);
    return tarefa;
}

//put
export const updateTarefa = async(id: string, data: Partial<ITarefa>): Promise<ITarefa | null> =>{
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id, data, {
        new: true, runValidators: true
    });
    return tarefa;
}

//delete
export const deleteTarefa = async(id:string):Promise<boolean> =>{
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id:id});
    return resultado.deletedCount>0;
}