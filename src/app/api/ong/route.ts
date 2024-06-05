import { db as prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const { name, address, telefone, email, imageUrl } = data;

    // Verificar se os campos obrigatórios estão presentes
    if (!name || !address || !telefone || !email) {
        return NextResponse.json("Dados inválidos.", { status: 400 });
    }

    try {
        // Criar a ONG no banco de dados com o imageUrl fornecido na solicitação
        const newOng = await prisma.ong.create({
            data: {
                name,
                address,
                telefone,
                email,
                imageUrl: imageUrl || "default_image_url" // Usar o imageUrl fornecido ou um valor padrão se não fornecido
            },
        });

        return NextResponse.json(newOng);
    } catch (error) {
        console.error("Erro ao criar ONG:", error);
        return NextResponse.json({ error: "Erro ao criar ONG." }, { status: 500 });
    }
}