import { db as prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const { name, email, cnpj, password } = data;
    console.log("ROUTE HANDLER", data);

    if (!name || !email || !cnpj || !password) {
        return NextResponse.json("Dados inválidos.", { status: 400 });
    }

    // Verificar se o e-mail já existe
    const isEmailExists = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (isEmailExists) {
        return NextResponse.json({ error: "E-mail já existente." }, { status: 400 });
    }

    // Verificar se o CNPJ já existe
    const isCnpjExists = await prisma.user.findUnique({
        where: {
            cnpj: cnpj,
        },
    });

    if (isCnpjExists) {
        return NextResponse.json({ error: "CNPJ já existente." }, { status: 400 });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o usuário
    const company = await prisma.user.create({
        data: {
            email,
            name,
            cnpj,
            hashedPassword,
            role: 'ORG', 
        },
    });

    return NextResponse.json(company);
}