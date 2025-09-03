//arquivo que vai auxiliar a conexão com o banco

//importar a biblioteca do mongodb

import mongoose from "mongoose";

//arrow function
const connectMongo = async () =>{
    mongoose.connect(process.env.DATABASE_URL) //estabeler a conexão com o mongo
        .then(()=>console.log("Conecta ao MongoDB"))
        .catch(err => console.error("Erro ao conectar ao MongoDB", err));
}

export default connectMongo;