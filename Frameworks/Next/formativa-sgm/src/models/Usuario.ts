//classe de modelagem de dados para Usuários
//mongoose -> vai ajusar na modelagem da classe

import mongoose, { Document, Model, Schema } from "mongoose";
//importe do Bcrypt
import bcrypt from "bcrypt";

//atributos
export interface IUsuario extends Document {
  _id: string;
  nome: string;
  email: string;
  senha?: string; // permite que a senha retorne nulo( não retorna a senha para o client_side)
  funcao: string;
  compareSenha(senhaUsuario: string): Promise<boolean>;
  //devolve para o usuário apenas a booleana de comparação da senha
}

//construtor (Schema)
const UsuarioSchema: Schema<IUsuario> = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true, select: false },
  funcao: {
    type: String,
    enum: ["tecnico", "gerente", "admin"],
    required: true,
  },
});

//criptografia
// método para criptografar a senha antes de enviar para o BD
UsuarioSchema.pre<IUsuario>("save", async function (next) {
  if (!this.isModified("senha") || !this.senha) return next;
  try {
    const salt = await bcrypt.genSalt(10); //todas as senha usarão o mesmo padrão
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

//método para comparar a senha antes de fazer o login
//quando o faz o login ( compara a senha digita e criptografada , com a senha criptografada do banco)
UsuarioSchema.methods.compareSenha = function (
  senhaUsuario: string
): Promise<boolean> {
  return bcrypt.compare(senhaUsuario, this.senha);
};

//toMap <=> fromMap
const Usuario: Model<IUsuario> =
  mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario", UsuarioSchema);

//componente reutilizavel
export default Usuario;
