'use client'

import { useState } from 'react';
import { Button } from '@mui/material';
import TicketPix from './TicketPix'; // Importe o componente TicketPix aqui

interface ServiceItemProps {
  ong: {
    name: string;
    email: string;

  };
  donation: {
    description: string;
    imageUrl: string;
  };
  isAuthenticated: boolean;

}

const ServiceItem: React.FC<ServiceItemProps> = ({ ong, donation, isAuthenticated }) => {
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a abertura do modal

  const handleOpenModal = () => {
    setModalOpen(true); // Abre o modal ao clicar no botão "Doar"
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Fecha o modal
  };

  return (
    <>
      <div className='flex items-center justify-center md:justify-right  '> 
        <div className="p-4 rounded-lg shadow-lg min-w-[50px] max-w-[750px] border border-black/10 md:m-0 justify-center items-center gap-4 flex flex-col  md:flex-row ">
          <div className="flex justify-center items-center min-h-[90px] min-w-[90px] max-h-[110px] max-w-[110px]">
            <img src={donation.imageUrl} className="rounded-lg" alt="Imagem doação" />
          </div>
          <div className=" flex flex-col">
            <h2 className="font-bold">{ong.name}</h2>
            <p className="text-sm text-gray-400">{donation.description}</p>
            <div className="flex items-center justify-between mt-3">
              <Button
                className='font-semibold bg-blue-700 hover:bg-blue-800 w-full text-white'
                onClick={handleOpenModal}>
                Doar
              </Button>
            </div>
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
