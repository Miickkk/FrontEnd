import {deleteOrdemServico, getOneOrdemServico, updateOrdemServico,} from "@/controllers/OrdemServicoController";
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
    const ordemServicoAtualizada = await updateOrdemServico(id, data);
    //quando a ordem de serviço não foi encontrada
    if (!ordemServicoAtualizada) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //usuraio foi encontrado e atualizado
    return NextResponse.json({ success: true, data: ordemServicoAtualizada });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error: error });
  }
}

// GET(One)
export async function GET({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    const ordemServico = await getOneOrdemServico(id);
    if (!ordemServico) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //ordem de serviço foi encontrada e atualizada
    return NextResponse.json({ success: true, data: ordemServico });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error: error });
  }
}

//DELETE
export async function DELETE({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    await deleteOrdemServico(id);
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
