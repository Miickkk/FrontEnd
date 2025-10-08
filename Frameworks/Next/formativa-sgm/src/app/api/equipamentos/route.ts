import { createEquipamento, getAllEquipamento } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    //requisição HTTP -> é front -> request -> backend
    const equipamentos = await getAllEquipamento(); //busca todos os equipamentos no BD
    return NextResponse.json({ success: true, data: equipamentos });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

export async function POST(req: NextRequest) {
  //pega o conteudo do HTML(visual)
  try {
    const data = await req.json(); //converte html => json
    const novoEquipamento = await createEquipamento(data);
    return NextResponse.json({ success: true, data: novoEquipamento



























        
     });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
