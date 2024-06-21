import { Metadata } from "next";
import Link from "next/link";


import Image from 'next/image';
import { CompanyLoginForm } from "@/components/company-login";
import AuthButtonCompany from "@/components/auth-company-buttom";

export const metadata: Metadata = {
  title: "Autenticação",
  description:
    "Autenticação utilizando Shadcs-ui Next-Auth (Authjs), prisma e Nextjs 13.4+",
};

export default async function CompanyLogin() {
  return (
    <div className="container relative py-48 md:py-0 min-h-screen flex flex-col md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <AuthButtonCompany page="entrar" />
      <div className="relative hidden md:flex md:h-full">
        <Image
          src="/images/login1.svg"
          className="min-w-550px min-h-550px"          
          alt="Descrição da imagem"
          layout="fill"
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
            <h1 className="text-2xl font-semibold tracking-tight">Login de Ong</h1>
            <p className="text-sm text-muted-foreground">
              Entre com os dados da sua instituição
            </p>
          </div>
          <CompanyLoginForm></CompanyLoginForm>
          
          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao clicar em continuar, você concorda com nossos{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link
              href="/privacy"
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
