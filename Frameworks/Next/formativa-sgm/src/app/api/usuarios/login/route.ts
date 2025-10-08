//criar o login do usuario (POST) -> envia o email e senha -> retorna o usuario

import { autenticaUsuario } from "@/controllers/UsuarioController";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

//JWT ()

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET não está definido nas variaveis locais");
}

// começar o método
export async function POST(req: NextRequest) {
  try {
    const { email, senha } = await req.json();
    //validar os dados
    if (!email || !senha) {
      return NextResponse.json({
        success: false,
        error: "Usuário e senha são Obrigatórios",
      });
    }
    //método de autnticação do usuário
    const usuario = await autenticaUsuario(email, senha);
    //se não encontrou um usuário
    if (!usuario) {
      return NextResponse.json({
        success: false,
        error: "Usário ou Senha inválidos",
      });
    }
    //se foi encontrado => gerar o token => acessar as próximas páginas
    const token = jwt.sign(
      { id: usuario._id, nome: usuario.nome, funcao: usuario.funcao },
      JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    return NextResponse.json({
      success: true,
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        funcao: usuario.funcao,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
