'use client'

import { useState } from 'react';
import { Button } from '@mui/material';
import TicketPix from './TicketPix'; // Importe o componente TicketPix aqui

interface ServiceItemProps {
  ong: {
    name: string;
    email: string;
    cpnj: string;
  };
  donation: {
    description: string;
    imageUrl: string;
  };
}

const ServiceItem: React.FC<ServiceItemProps> = ({ ong, donation }) => {
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a abertura do modal

  const handleOpenModal = () => {
    setModalOpen(true); // Abre o modal ao clicar no botão "Doar"
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Fecha o modal
  };

  return (
    <>
      <div className="flex gap-4 items-center w-full">
        <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
          <img src={donation.imageUrl} className="rounded-lg" alt="Imagem doação" />
        </div>
        <div className="flex flex-col w-full">
          <h2 className="font-bold">{ong.name}</h2>
          <p className="text-sm text-gray-400">{donation.description}</p>
          <div className="flex items-center justify-between mt-3">
            <Button onClick={handleOpenModal} variant="outlined" style={{ color: 'black', borderColor: 'black' }}>
              Doar
            </Button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <TicketPix
          onClose={handleCloseModal} // Passa a função para fechar o modal como prop para o TicketPix
          ongName={ong.name} // Passa o nome da ONG para o TicketPix
          email={ong.email} // Passa o email da ONG para o TicketPix
          cpf={''} />
      )}
    </>
  );
};

export default ServiceItem;
