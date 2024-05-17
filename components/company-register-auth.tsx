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

interface CompanyAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface ICompany {
    name: string;
    email: string;
    cnpj: string;
    password: string;
}

export function CompanyRegisterForm({ className, ...props }: CompanyAuthFormProps) {
    const { toast } = useToast();
    const router = useRouter();

    const [data, setData] = useState<ICompany>({
        name: "",
        email: "",
        cnpj: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        const request = await fetch("/api/companies", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response = await request.json();

        console.log("COMPANY REGISTER FORM", response);

        if (!request.ok) {
            toast({
                title: "Oops...",
                description: response.error,
                variant: "destructive",
                action: (
                    <ToastAction altText="Tente Novamente">Tente Novamente</ToastAction>
                ),
            });
        } else {
            console.log(response);
            router.push("/pages/login-company");
        }

        setData({
            name: "",
            email: "",
            cnpj: "",
            password:"",
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
                        <Label className="sr-only" htmlFor="companyName">
                            Nome da Empresa
                        </Label>
                        <Input
                            id="companyName"
                            placeholder="Nome da Empresa"
                            type="text"
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email Corporativo
                        </Label>
                        <Input
                            id="email"
                            placeholder="Email@corporativo.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="cnpj">
                            CNPJ
                        </Label>
                        <Input
                            id="cnpj"
                            placeholder="CNPJ"
                            type="text"
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                            name="cnpj"
                            value={data.cnpj}
                            onChange={handleChange}
                            className="rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
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
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Ou continue com
                    </span>
                </div>
            </div>
            <Button
                onClick={() => signIn("google", { callbackUrl: "/pages/login" })}
                variant="outline"
                type="button"
                disabled={isLoading}
                className="w-full border-gray-300 py-2 rounded-md flex items-center justify-center space-x-2 focus:outline-none focus:ring focus:border-blue-300"
            >
                {isLoading ? (
                    <Icons.spinner className="h-4 w-4 animate-spin" />
                ) : (
                    <Icons.google className="h-4 w-4 mr-2" />
                )}
                <span>Google</span>
            </Button>
        </div>
    );
}
