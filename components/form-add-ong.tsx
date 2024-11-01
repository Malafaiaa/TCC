"use client"
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

interface IOng {
  name: string;
  address: string;
  telefone: string;
  email: string;
  imageUrl: string; // Adicionado o campo imageUrl
}

export function AddOngForm({ className, ...props }: UserAuthFormProps) {
  const { toast } = useToast();
  const router = useRouter();

  const [data, setData] = useState<IOng>({
    name: "",
    address: "",
    telefone: "",
    email: "",
    imageUrl: "", // Inicializado como string vazia
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const request = await fetch("/api/ong", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await request.json();

    console.log("Ong REGISTER FORM", response);

    if (!request.ok) {
      toast({
        title: "Oooops...",
        description: response.error,
        variant: "destructive",
        action: (
          <ToastAction altText="Tente Novamente">Tente Novamente</ToastAction>
        ),
      });
    } else {
      console.log(response);
      router.push("/pages/instituicoes-participantes");
    }

    setData({
      name: "",
      address: "",
      telefone: "",
      email: "",
      imageUrl: "", // Resetar imageUrl para string vazia
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
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="name">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Nome"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              className="rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              className="rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="address">
              Endereço
            </Label>
            <Input
              id="address"
              placeholder="Endereço"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="address"
              value={data.address}
              onChange={handleChange}
              required
              className="rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="telefone">
              Telefone
            </Label>
            <Input
              id="telefone"
              placeholder="Telefone"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="telefone"
              value={data.telefone}
              onChange={handleChange}
              required
              className="rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="imageUrl">
              URL da Imagem
            </Label>
            <Input
              id="imageUrl"
              placeholder="URL da Imagem"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="imageUrl"
              value={data.imageUrl}
              onChange={handleChange}
              required
              className="rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
            />
          </div>
          <Button disabled={isLoading} className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Registrar
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
    </div>
  );
}