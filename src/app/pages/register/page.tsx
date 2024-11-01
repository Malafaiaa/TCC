import { Metadata } from "next";
import Image from 'next/image';
import Link from "next/link";
import { UserRegisterForm } from "@/components/user-register-auth";
import AuthButton from "@/components/auth-button";
import AuthButtonCompany from "@/components/auth-company-buttom";

export const metadata: Metadata = {
  title: "Autenticação",
  description:
    "Autenticação utilizando Shadcs-ui Next-Auth (Authjs), prisma e Nextjs 13.4+",
};

export default async function Register() {
  return (
    <div className="flex justify-center items-center container relative md:py-0 min-h-screen flex flex-col md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <AuthButton page="register" />
      <div className="flex justify-center items-center ">
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
            <h1 className="mt-6  text-2xl font-semibold tracking-tight">Criar Conta</h1>
            <p className="text-sm text-muted-foreground">
              Preencha com seus dados
            </p>
          </div>
          <UserRegisterForm />
          <p className="px-8 text-center text-sm text-gray-600">
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