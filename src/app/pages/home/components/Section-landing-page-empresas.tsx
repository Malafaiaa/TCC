import style from '../section.module.css';
import Link from 'next/link';

export default function SectionLandingPageEmpresas(props: any) {
    return (
        <section className={style.section_presentation}>
            <div className={style.box_presentation}>
                <div className={style.text_presentation}>
                    <h1><strong>AUMENTE O IMPACTO SOCIAL DA SUA EMPRESA</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eros fermentum, condimentum tortor sit amet, mollis purus. Vivamus ultrices, nisi sit amet rhoncus tempus, elit velit venenatis justo, et hendrerit turpis lacus ac purus.</p>
                    <p>Aliquam non purus vitae justo efficitur accumsan. Ut ut ex non nisi efficitur placerat. Vestibulum suscipit luctus urna, sit amet pellentesque purus congue nec.</p>
                    <Link href={"/pages/doacoes"}>
                        <button className={style.btn_doar_home}>Cadastre sua empresa agora</button>
                    </Link>
                </div>
                <div>
                    <img className={style.img_landingpage} src="/images/undraw.png" alt="Ilustração de pessoas ajudando" />
                </div>
            </div>
        </section>
    );
}