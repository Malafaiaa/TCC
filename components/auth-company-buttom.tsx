"use client";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function AuthButtonCompany({ page }: { page: string }) {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href={page === "register" ? "/pages/login-company" : "/pages/register-company"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          {page === "register" ? "Entrar" : "Criar Conta"}
        </Link>
      ) : (
        <Button
          onClick={() => signOut({ callbackUrl: "/pages/login-company" })}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sair
        </Button>
      )}
    </>
  );
}