"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DashboardPage(){
    const route = useRouter();
    const [userFuncao, setUserFuncao] = useState<string | null>(null);

    useEffect(()=>{
        const funcao = localStorage.getItem("funcao");
        if(!funcao){
            route.push("/login");
        }else{
            setUserFuncao(funcao);
        }
    });

    //logout
    const handleLogout = async () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("funcao");
        route.push("/login");
    };

    //montar a Tela de Acordo com a Função do Usuario
    const renderDashboard = () => {
        if(userFuncao?.toLowerCase() === "admin"){
            return <DashboardAdmin />;
        }else if (userFuncao === "gestor"){
            return <DashboardGestor/>;
        }else if (userFuncao === "tecnico"){
            return <DashboardTecnico/>;
        }
    }

    return (
        <div>
            <header>
                <h1>Bem-Vindo</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <main>
                {renderDashboard()}
            </main>
        </div>
    );
}