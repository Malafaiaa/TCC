"use client"

import Header from '../home/components/Header';
import style from './styles.module.css';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import CardInstituicoes from './components/card-instituicoes';
import { useSession } from 'next-auth/react'; // Importe o hook useSession

interface Institution {
    name: string;
    img: string;
    summary: string;
}

interface CardInstituicaoProps {
    img: string;
    name: string;
    onClick: () => void;
}

const CardInstituicao: React.FC<CardInstituicaoProps> = ({ img, name, onClick }) => {
    return (
        <div className={style.modal_content}>
            <img className={style.img_card} src={img} alt={name} />
            <h3 className={style.name_card}>{name}</h3>
            <button className={style.btn_card} onClick={onClick}>Saiba mais</button>
        </div>
    );
}

function InstituicoesParticipantes() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedInstitution, setSelectedInstitution] = useState<Institution>({ name: '', img: '', summary: '' });
    const { data: session } = useSession(); // Obtenha a sessão do usuário

    const openModal = (institutionName: string, institutionImg: string, institutionSummary: string) => {
        setSelectedInstitution({ name: institutionName, img: institutionImg, summary: institutionSummary });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    // Verifique se o usuário está autenticado
    if (!session) {
        return (
            <div className={style.message}>
                <p>Você precisa estar logado para visualizar esta página.</p>
            </div>
        ); // Se não estiver autenticado, exibe uma mensagem
    }

    return (
        <>
            <Header />
            <h1 className={style.title}>Instituições participantes</h1>
            <h1 className={style.subtitle}>Conheça as organizações incríveis que se unem a nós para fazer a diferença. Juntos, estamos transformando vidas e construindo um mundo melhor.</h1>
            <div className={style.Main}>
                <CardInstituicao
                    img="https://media.istockphoto.com/id/1225371837/pt/vetorial/used-clothing-donation-banner-poster-calligraphy-lettering-social-humanitarian-aid-and.jpg?s=612x612&w=0&k=20&c=50x49PFtxXWo0IgU29BT9jRYjdhhKlsy10UWiR-0ZaM="
                    name="MASSA CINZENTA"
                    onClick={() => openModal('MASSA CINZENTA', 'https://media.istockphoto.com/id/1225371837/pt/vetorial/used-clothing-donation-banner-poster-calligraphy-lettering-social-humanitarian-aid-and.jpg?s=612x612&w=0&k=20&c=50x49PFtxXWo0IgU29BT9jRYjdhhKlsy10UWiR-0ZaM=', 
                    'Resumo da Massa Cinzenta...')}
                />
                <CardInstituicao
                    img="https://media.istockphoto.com/id/1223169039/pt/vetorial/clothing-donation-box.jpg?s=612x612&w=0&k=20&c=YMOjh31YinTKg2bNt7dNUJIiBrbN9Ym4OZ3CsqM3RrA="
                    name="AKIRA TORIYAMA"
                    onClick={() => openModal('AKIRA TORIYAMA', 'https://media.istockphoto.com/id/1223169039/pt/vetorial/clothing-donation-box.jpg?s=612x612&w=0&k=20&c=YMOjh31YinTKg2bNt7dNUJIiBrbN9Ym4OZ3CsqM3RrA=', 
                    'Resumo do Akira Toriyama...')}
                />
                <CardInstituicao
                    img="https://media.istockphoto.com/id/1467468060/pt/vetorial/kawaii-k-pop-band-dog-design.jpg?s=612x612&w=0&k=20&c=Jux6HvkVEFCpwufMW-dx0TTSpjd98lfmHru13_8VRAo="
                    name="K-POP"
                    onClick={() => openModal('K-POP', 'https://media.istockphoto.com/id/1467468060/pt/vetorial/kawaii-k-pop-band-dog-design.jpg?s=612x612&w=0&k=20&c=Jux6HvkVEFCpwufMW-dx0TTSpjd98lfmHru13_8VRAo=', 
                    'Resumo do K-POP...')}
                />
                {/* Adicione mais cards conforme necessário */}
            </div>

            {modalOpen && (
                <div className={style.modal} onClick={closeModal}>
                    <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedInstitution.name}</h2>
                            <img src={selectedInstitution.img} alt={selectedInstitution.name} />
                        <p>{selectedInstitution.summary}</p>
                    <a href="#" className={style.saiba_mais_link}>Saiba Mais Sobre a instituição</a>
                    <button className={style.btn_option} onClick={closeModal}>Ok</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default InstituicoesParticipantes;
