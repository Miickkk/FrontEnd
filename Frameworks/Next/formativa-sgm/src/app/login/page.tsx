"use client";
import { useRouter } from "next/router";
import { useState } from "react";

 //componente client-side

export default function LoginPage(){
    //campo para digitação do email
    const [email, setEmail] = useState("");
    //campo para digitar a Senha
    const [senha, setSenha] = useState("");
    //campo mensagem erro
    const [erro, setErro] = useState("");

    //controle das rotas de navegação
    const route =  useRouter();

    // método para enviar o login
    const handleLogin = async (e: React.FormEvent) =>{//controle dos eventos do Formulário
        e.preventDefault(); //evita o recarregamento da página
        setErro(""); //limpa a mensagem de erro

        try {
            const resposta = await fetch(
                "/api/usuarios/login",{
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify({email, senha})
                }
            );
            // analisar a resposta da soliciação
            const data = await resposta.json()
            if(data.success){
                //aramazenar as informações do usuário logado no Localstorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("funcao", data.usuario.funcao);
                route.push("/dashboard");
            }else{
                const erroData = data.error();
                setErro(erroData.message || "Falha de Login");
            }
        } catch (error) {
            console.error("Erro de Login",error);
            setErro("Erro de Servidor: "+error);
        }
    }

    //REACTDOM
    return(
        <div className="center">
            <h2>Login</h2>
            {erro && <p style={{color:"red"}}>{erro}</p>}
            <form onSubmit={handleLogin}>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} 
                        required/>
                </div>
                <div className="senha">
                    <label htmlFor="senha">Senha</label>
                    <input type="senha"
                        value={senha}
                        onChange={(e)=> setSenha(e.target.value)} 
                        required/>
                </div>
                <button type="submit">Entrar</button>

            </form>
        </div>
    );
}