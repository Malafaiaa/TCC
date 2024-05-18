import style from '../section.module.css';

export default function SectionCadastroEmpresas(props: any) {
    return (
        <section className={style.section_data} id='section_data'>
            <div className={style.container_section_data}>
                <h1>REGISTRE SUA <strong>EMPRESA</strong> E RECEBA DOAÇÕES ATRAVÉS DO <strong>DONATION OUTSOURCING SERVICES</strong></h1>
                <p>Veja como seu cadastro pode impactar positivamente sua empresa e a sociedade:</p>
                <div className={style.section_row}>
                    <div className={style.content_data}>
                        <div className={style.section_box_data}>
                            <img src="/images/contador-doacoes.png" alt="Ícone de doações" />
                            <p>Milhares</p>
                        </div>
                        <p>Abra as portas para milhares de pessoas e organizações interessadas em contribuir com sua causa.</p>
                    </div>
                    <div className={style.content_data}>
                        <div className={style.section_box_data}>
                            <img src="/images/contador-valor.png" alt="Ícone de valor" />
                            <p>Recursos Financeiros</p>
                        </div>
                        <p>Receba recursos financeiros para impulsionar projetos e iniciativas da sua empresa.</p>
                    </div>
                    <div className={style.content_data}>
                        <div className={style.section_box_data}>
                            <img src="/images/contador-ongs.png" alt="Ícone de ONGs" />
                            <p>Parcerias</p>
                        </div>
                        <p>Estabeleça parcerias com ONGs e outras organizações para ampliar o alcance do seu impacto social.</p>
                    </div>
                    <div className={style.content_data}>
                        <div className={style.section_box_data}>
                            <img src="/images/contador-doadores.png" alt="Ícone de doadores" />
                            <p>Engajamento</p>
                        </div>
                        <p>Engaje sua equipe e clientes em ações sociais, fortalecendo a imagem e valores da sua empresa.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
