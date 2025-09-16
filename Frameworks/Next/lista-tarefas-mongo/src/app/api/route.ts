// criar as routes que não precisa de ID

import { createTarefa, getAllTarefas } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const tarefas = await getAllTarefas(); //chama o controller
        //trata a resposta obitida da conexão com MongoDB
        return NextResponse.json({success:true, data:tarefas});
    } catch (error) {
        return NextResponse.json({
            success: false,
            error:`Falha ao Busca As Tarefas: ${error}`
        }, {status: 500});
    }
}

export async function POST(req: NextRequest) { //req: são os dados que estou enviando
    try {
        const data = await req.json();//verifica/convert se o conteudo esta em Json
        const newTarefa = await createTarefa(data); //controller
        return NextResponse.json({success:true, data: newTarefa}, {status:201});
    } catch (error) {
        return NextResponse.json({
            success: false, 
            error: `Falha ao Criar A Tarefa: ${error}`}, {status:400})
    }
}