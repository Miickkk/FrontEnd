import {deleteEquipamento, getOneEquipamento, updateEquipamento } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

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
    const equipamentoAtualizado = await updateEquipamento(id, data);
    //quando o equipamento não foi encontrado
    if (!equipamentoAtualizado) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //equipamento foi encontrado e atualizado
    return NextResponse.json({ success: true, data: equipamentoAtualizado });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error: error });
  }
}

// GET(One)
export async function GET({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    const equipamento = await getOneEquipamento(id);
    if (!equipamento) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //equipamento foi encontrado e atualizado
    return NextResponse.json({ success: true, data: equipamento });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error: error });
  }
}

//DELETE
export async function DELETE({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    await deleteEquipamento(id);
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
