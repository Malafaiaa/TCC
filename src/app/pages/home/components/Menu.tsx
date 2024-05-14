import Link from 'next/link';
import { useSession } from 'next-auth/react';
import "../styles.css";

function Menu() {
    const { data: session } = useSession();
    const isAuthenticated = !!session; // Verifica se há uma sessão ativa

    return (
        <div className="menu">
            <Link href={"/"}>Home</Link>
            {isAuthenticated && <Link href={"/publications"}>Publicações</Link>}
            <Link href={"/pages/instituicoes-participantes"}>Instituições Participantes</Link>
            <Link href={"/"}>Sobre Nós</Link>
        </div>
    );
}

export default Menu;