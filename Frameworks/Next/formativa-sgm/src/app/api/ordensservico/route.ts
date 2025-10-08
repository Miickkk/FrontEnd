import { createOrdemServico, getAllOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const ordensServico = await getAllOrdemServico(); 
    return NextResponse.json({ success: true, data: ordensServico });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); 
    const novoOrdemServico = await createOrdemServico(data);
    return NextResponse.json({ success: true, data: novoOrdemServico });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
