"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Ong, donation } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceItemProps {
  ong: Ong;
  donation: donation;
  isAuthenticated: boolean;
}

const ServiceItem = ({ donation, ong, isAuthenticated }: ServiceItemProps) => {
  const { data } = useSession();
  const [donationAmount, setDonationAmount] = useState("0,00");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    if (!isAuthenticated) {
      return signIn("");
    }
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleDonationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    const formattedValue = formatCurrency(input);
    setDonationAmount(formattedValue);
  };

  const handleDonationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const valueInCents = parseInt(donationAmount.replace(/[^\d]/g, ''), 10); // Remove non-digit characters and convert to number

    // Ensure the donation amount is at least 1 real (100 cents)
    if (valueInCents < 100) {
      alert("O valor mínimo para doação é R$ 1,00.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ongId: ong.id, donationAmount: valueInCents / 100 }),
      });

      if (response.ok) {
        const { qrCodeURL } = await response.json();
        window.location.href = qrCodeURL; // Redireciona para a URL do QR Code do Mercado Pago
      } else {
        console.error("Erro ao criar preferência de pagamento");
      }
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
    }
  };

  const formatCurrency = (value: string): string => {
    const numericValue = parseInt(value, 10);

    if (isNaN(numericValue)) {
      return "R$ 0,00";
    }

    const stringValue = numericValue.toString().padStart(3, "0");
    const reais = stringValue.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const centavos = stringValue.slice(-2);

    return `R$ ${reais},${centavos}`;
  };

  return (
    <Card>
      <CardContent className="p-3 w-full">
        <div className="flex gap-4 items-center w-full">
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              className="rounded-lg"
              src={donation.imageUrl}
              fill
              style={{ objectFit: "contain" }}
              alt={donation.name}
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold">{ong.name}</h2>
            <p className="text-sm text-gray-400">{donation.description}</p>

            <div className="flex items-center justify-between mt-3">
              <Button variant="secondary" onClick={handleOpenModal}>
                Doar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Doação para {ong.name}</h2>
            <form onSubmit={handleDonationSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  value={donationAmount}
                  onChange={handleDonationChange}
                  placeholder="Digite o valor da doação"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="secondary" onClick={handleCloseModal}>
                  Cancelar
                </Button>
                <Button type="submit" variant="default">
                  Finalizar Doação
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ServiceItem;
