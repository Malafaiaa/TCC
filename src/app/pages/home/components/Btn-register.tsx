"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import "../styles.css"

export default function BtnRegister(props) {
    const { data: session } = useSession();
    const isAuthenticated = session?.user;

    if (isAuthenticated) {
        return null; // Retorna null para renderizar nada se o usuário estiver autenticado
    }

    return (
        <>
            <div>
                <Link href="/pages/register"><button className="btn-register" type="button">Cadastre-se</button></Link>
            </div>
        </>
    )
}