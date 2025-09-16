import mongoose, { Document, Model, Schema } from "mongoose";


//defir a estrutura do obj
export interface ITarefa extends Document{
    //herdamos a base Document do Mongoose
    //vamos criar os atributos do OBJ
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

// criar a Regra (Schema) do MongoDB

const TarefaSchema: Schema<ITarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true,"O Título é obrigatório"],
        trim: true,
        maxlength:[50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm: {
        type: Date,
        default: Date.now //pega o carimbo de data e hora que a tarefa foi criada
    }
})

// export do modelo ( tanto para enviar para o banco quanto para receber info do banco)

const Tarefa: Model<ITarefa> = mongoose.models.Tarefa || mongoose.model<ITarefa>("Tarefa", TarefaSchema);

// componente reutilizabel
export default Tarefa;