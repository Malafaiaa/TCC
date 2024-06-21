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

        // Criar a doação Pix associada à nova ONG
        const pixDonation = await prisma.donation.create({
            data: {
                name: "Pix",
                description: "Realize uma doação em forma de pix",
                imageUrl: "https://utfs.io/f/1ae7bdaf-7aa0-4742-ac75-302f026adb64-2dnj.jpeg",
                ongId: newOng.id, // Associar a doação à ONG criada
            },
        });

        // Retornar a ONG criada com a doação Pix associada
        return NextResponse.json({ newOng, pixDonation });
    } catch (error) {
        console.error("Erro ao criar ONG ou doação Pix:", error);
        return NextResponse.json({ error: "Erro ao criar ONG ou doação Pix." }, { status: 500 });
    }
}
