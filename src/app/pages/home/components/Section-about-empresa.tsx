import style from '../section.module.css';

export default function SectionWhyChooseUs(props: any) {
    return (
        <section className={style.section_why_choose} id={style.why_choose}>
            <h1>POR QUE ESCOLHER NOSSA PLATAFORMA?</h1>
            <div className={style.container_why_choose}>
                <div className={style.box_why_choose}>
                    <img src="/images/icon1.png" alt="Ícone de eficiência" className={style.icon_why_choose} />
                    <h2>Facilidade e Eficiência</h2>
                    <p>Nossa plataforma simplifica o processo de doações, tornando-o eficiente e acessível para empresas e doadores.</p>
                </div>
                <div className={style.box_why_choose}>
                    <img src="/images/icon2.png" alt="Ícone de transparência" className={style.icon_why_choose} />
                    <h2>Transparência e Confiança</h2>
                    <p>Garantimos total transparência em todo o processo de doação, construindo confiança tanto para doadores quanto para empresas cadastradas.</p>
                </div>
                <div className={style.box_why_choose}>
                    <img src="/images/icon3.png" alt="Ícone de suporte" className={style.icon_why_choose} />
                    <h2>Suporte Personalizado</h2>
                    <p>Nossa equipe oferece suporte personalizado para empresas cadastradas, ajudando-as a maximizar seu impacto social.</p>
                </div>
                <div className={style.box_why_choose}>
                    <img src="/images/icon4.png" alt="Ícone de inovação" className={style.icon_why_choose} />
                    <h2>Inovação e Tecnologia</h2>
                    <p>Estamos constantemente inovando e utilizando tecnologia de ponta para impulsionar o sucesso das doações e o impacto social.</p>
                </div>
            </div>
        </section>
    );
}