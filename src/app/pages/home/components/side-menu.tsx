import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { LogInIcon, LogOutIcon, UserIcon, UserPlus } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const SideMenu = (props) => {
  const { data: session } = useSession();
  const isAuthenticated = session?.user;
  const userName = session?.user?.name;

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <SheetHeader className="text-left  border-secondary p-5">
        <SheetTitle>...</SheetTitle>
      </SheetHeader>

      <div className="flex flex-col px-5 py-6 gap-3">
        <div className="flex items-center gap-2">
          <UserIcon size={32} />
          <h2 className="font-bold">
            {isAuthenticated ? `Olá, ${userName}` : "Olá, faça seu login ou crie uma conta!"}
          </h2>
        </div>

        {isAuthenticated ? (
          <Button variant="secondary" className="w-full justify-start" onClick={handleLogout}>
            <LogOutIcon className="mr-2" size={18} />
            Sair
          </Button>
        ) : (
          <>
            <Link href="/pages/login">
              <Button variant="outline" className="w-full justify-start">
                <LogInIcon className="mr-2" size={18} />
                Login
              </Button>
            </Link>

            <Link href="/pages/register">
              <Button variant="outline" className="w-full justify-start">
                <UserPlus className="mr-2" size={18} />
                Cadastro
              </Button>
            </Link>
            
            <Link href="/pages/login-company">
              <Button variant="outline" className="w-full justify-start">
                <LogInIcon className="mr-2" size={18} />
                Login Institucional
              </Button>
            </Link>
           
            <Button variant="outline" className="justify-start" asChild>
          <Link href="/pages/juridico">
            <span className="flex items-center">
              <UserIcon size={18} className="mr-2" />
              Sou uma Ong/Instituição
            </span>
          </Link>
        </Button>
          </>
        )}
      </div>

    </>
  );
};

export default SideMenu;