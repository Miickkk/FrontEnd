import Usuario, { IUsuario } from "@/models/Usuario";
import connectMongo from "@/services/mongodb"


//getAll
export const getAllUsuario = async() =>{
    await connectMongo(); //estabelece conexão ???
    const usuarios = await Usuario.find([]); //listar todos os usuários da coleção
    return usuarios;
};

//getOne
export const getOneUsuario = async(id:string) =>{
    await connectMongo(); //estabelece conexão
    const usuario = await Usuario.findById(id); //listar todos os usuários da coleção
    return usuario;
};

//create
export const createUsuario = async(data: Partial<IUsuario>) =>{
    await connectMongo();
    const novoUsuario = new Usuario(data); // cria um usuario a partir do Schema
    const novoUsuarioId = novoUsuario.save();
    return novoUsuarioId; //retorna o novo usuário já com o ID
};

//update
export const updateUsuario = async(id:string, data: Partial<IUsuario>) =>{
    await connectMongo();
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {new:true});
    return usuarioAtualizado; //retorna o novo usuário Atualizado
};

//delete
export const deleteUsuario = async(id: string) =>{
    await connectMongo();
    await Usuario.findByIdAndDelete(id);
};

//método de autenticação de usuário (login) a senha é comparada
export const autenticaUsuario = async(email:string, senha: string) => {
    await connectMongo();
    //buscar o usuário pelo email
    const usuario = await Usuario.find({email}).select("+senha");
    //se caso usuári não encontrado
    if(!usuario || usuario.length == 0) return null;
    //se caso usuário for encontrado
    const senhaSecreta = await usuario[0].compareSenha(senha); //booleana
    if(!senhaSecreta) return null; // senha incorreta
    //se deu certo retorna o usuário
    return usuario[0];

}

