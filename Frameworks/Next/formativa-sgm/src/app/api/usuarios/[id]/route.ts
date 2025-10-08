//Rotas que PRecisam do ID (PATCH ou PUT, DELETE, GET(one))

import {
  deleteUsuario,
  getOneUsuario,
  updateUsuario,
} from "@/controllers/UsuarioController";
import { NextRequest, NextResponse } from "next/server";

//criar uma interface, PArametro ==id:string
interface Parametro {
  id: string;
}

//PATCH
export async function PATCH(
  req: NextRequest,
  { params }: { params: Parametro }
) {
  try {
    const { id } = params;
    const data = await req.json();
    const usuarioAtualizado = await updateUsuario(id, data);
    //quando o usuário não foi encontrado
    if (!usuarioAtualizado) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //usuraio foi encontrado e atualizado
    return NextResponse.json({ success: true, data: usuarioAtualizado });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error: error });
  }
}

// GET(One)
export async function GET({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    const usuario = await getOneUsuario(id);
    if (!usuario) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //usuraio foi encontrado e atualizado
    return NextResponse.json({ success: true, data: usuario });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error: error });
  }
}

//DELETE
export async function DELETE({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    await deleteUsuario(id);
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
