import { Metadata } from "next";
import Link from "next/link";
import { UserLoginForm } from "@/components/user-login-auth";
import AuthButton from "@/components/auth-button";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Autenticação",
  description:
    "Autenticação utilizando Shadcs-ui Next-Auth (Authjs), prisma e Nextjs 13.4+",
};

export default async function Register() {
  return (
    <div className="flex justify-center items-center     container relative md:py-0 min-h-screen flex flex-col md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <AuthButton page="login" />
      <div  className="flex justify-center items-center ">
        <img
          src="/images/login2.svg"
          alt="Descrição da imagem"
          className="  w-6/12 h-6/12"  
        />
        
        <div className="relative z-20 flex items-center text-lg font-medium">
          {/* Se precisar adicionar algo em cima da imagem */}
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            {/* Se precisar adicionar algo em cima da imagem */}
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8 flex justify-center items-center">
        <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="mt-6  text-2xl font-semibold tracking-tight">Bem-vindo(a) de volta!</h1>
            <p className="text-sm text-muted-foreground">
            Aqui você entrará com a sua conta física comum para ter acesso novamente a nossa plataforma
            </p>
          </div>
          <UserLoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao clicar em continuar, você concorda com nossos{" "}
            <Link
              href="/pages/termos-e-servicos"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link
              href="/pages/politica-de-privacidade"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}