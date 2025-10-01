import Equipamento, { IEquipamento } from "@/models/Equipamento";
import connectMongo from "@/services/mongodb"


//getAll
export const getAllEquipamento = async() =>{
    await connectMongo(); //estabelece conexão ???
    const Equipamentos = await Equipamento.find([]); //listar todos os usuários da coleção
    return Equipamentos;
};

//getOne
export const getOneEquipamento = async(id:string) =>{
    await connectMongo(); //estabelece conexão
    const equipamento = await Equipamento.findById(id); //listar todos os usuários da coleção
    return equipamento;
};

//create
export const createEquipamento = async(data: Partial<IEquipamento>) =>{
    await connectMongo();
    const novoEquipamento = new Equipamento(data); // cria um Equipamento a partir do Schema
    const novoEquipamentoId = novoEquipamento.save();
    return novoEquipamentoId; //retorna o novo usuário já com o ID
};

//update
export const updateEquipamento = async(id:string, data: Partial<IEquipamento>) =>{
    await connectMongo();
    const EquipamentoAtualizado = await Equipamento.findByIdAndUpdate(id, data, {new:true});
    return EquipamentoAtualizado; //retorna o novo usuário Atualizado
};

//delete
export const deleteEquipamento = async(id: string) =>{
    await connectMongo();
    await Equipamento.findByIdAndDelete(id);
};