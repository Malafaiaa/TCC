"use client"
import { useSession } from "next-auth/react";
import Link from "next/link"
import { signOut } from "next-auth/react"; // Importe a função signOut
import "../styles.css"

export default function BtnLogin(props) {
    const { data: session } = useSession();
    const isAuthenticated = session?.user;

    const handleLogout = async () => {
        await signOut(); // Realiza logout quando o botão é clicado
    };

    if (isAuthenticated) {
        return (
            <>
                <div>
                    <button className="btn-login" type="button" onClick={handleLogout}>Sair</button>
                </div>
            </>
        );
    }

    return (
        <>
            <div>
                <Link href="/pages/login"><button className="btn-login" type="button">Entrar</button></Link>
            </div>
        </>
    )
}