"use client"
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

interface CompanyAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

interface ICompany {
  cnpj: string;
  password: string;
}

export function CompanyLoginForm({ className, ...props }: CompanyAuthFormProps) {
  const [data, setData] = useState<ICompany>({
    cnpj: "",
    password: "",
  });

  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const res = await signIn<"credentials">("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.error) {
      toast({
        title: "Ooops...",
        description: res.error,
        variant: "destructive",
        action: (
          <ToastAction altText="Tente Novamente">Tente Novamente</ToastAction>
        ),
      });
    } else {
      router.push("/");
    }

    setData({
      cnpj: "",
      password: "",
    });
    setIsLoading(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="cnpj">
              CNPJ
            </Label>
            <Input
              id="cnpj"
              placeholder="00.000.000/0000-00"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              name="cnpj"
              value={data.cnpj}
              onChange={handleChange}
              className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Senha"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="password"
              value={data.password}
              onChange={handleChange}
              className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <Button disabled={isLoading} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Entrar
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>
      </div>
      <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        variant="outline"
        type="button"
        disabled={isLoading}
        className="border-gray-300 rounded-md px-3 py-2 flex items-center justify-center space-x-2 focus:outline-none focus:ring focus:border-blue-300"
      >
        {isLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="h-4 w-4" />
        )}
        <span>Google</span>
      </Button>
    </div>
  );
}
