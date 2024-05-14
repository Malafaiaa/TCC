import Link from 'next/link';
import { useSession } from 'next-auth/react';
import "../styles.css";

function MenuEmpresa(props: any) {
    const { data: session } = useSession();
    const isAuthenticated = session?.user;

    return (
        <>
            <div className="menu">
                <Link href={"/"}>Home</Link>
              
                <Link href={"/pages/instituicoes-participantes"}>Instituições Participantes</Link>
                <Link href={"/"}>Porque escolher nossa plataforma?
                </Link>
            </div>
        </>
    );
}

export default MenuEmpresa;