// rrotas de requisição api que não usa ID (GET / POST)

import { createUsuario, getAllUsuario } from "@/controllers/UsuarioController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    //requisição HTTP -> é front -> request -> backend
    const usuarios = await getAllUsuario(); //busca todos os usuário no BD
    return NextResponse.json({ success: true, data: usuarios });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

export async function POST(req: NextRequest) {
  //pega o conteudo do HTML(visual)
  try {
    const data = await req.json(); //converte html => json
    const novoUsuario = await createUsuario(data);
    return NextResponse.json({ success: true, data: novoUsuario });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
