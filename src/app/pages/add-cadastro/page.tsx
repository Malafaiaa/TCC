import { Metadata } from "next";
import Image from 'next/image';
import Link from "next/link";
import { UserRegisterForm } from "@/components/user-register-auth";
import AuthButton from "@/components/auth-button";
import AuthButtonCompany from "@/components/auth-company-buttom";
import { AddOngForm } from "@/components/form-add-ong";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Autenticação",
  description:
    "Autenticação utilizando Shadcs-ui Next-Auth (Authjs), prisma e Nextjs 13.4+",
};

export default async function CadastroOng() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ORG') {
    throw new Error('Você precisa ser uma organização para acessar essa página');
  }

  return (
    <div className="">
      {/* <AuthButtonCompany page="register" /> */}
      <div className="relative hidden md:flex md:h-full">
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
            <h1 className="text-2xl font-semibold tracking-tight">Cadastre sua instituição</h1>
            <p className="text-sm text-muted-foreground">
              Preencha com os dados necessários
            </p>
          </div>
          <AddOngForm />
          <p className="px-8 text-center text-sm text-gray-600">
            Ao clicar em registrar, você concorda com nossos{" "}
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