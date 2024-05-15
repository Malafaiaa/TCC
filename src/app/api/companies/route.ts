import { db as prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){

    const data = await request.json();
    const { name, email, cnpj, password } = data;
    console.log("ROUTE HANDLER", data);

    if(!name || !email || !cnpj || !password){
        return NextResponse.json("Dados inválidos.", { status: 400});
    }

    const isCompanyExists = await prisma.company.findUnique({
        where: {
            email: email
        }
    });

    if(isCompanyExists){
        return NextResponse.json({ error: "E-mail já existente."}, { status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const company = await prisma.company.create({
        data: {
            email,
            name,
            cnpj,
            hashedPassword
        }
    });

    return NextResponse.json(company);
}