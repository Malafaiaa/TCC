"use client"

import style from '../section.module.css'
import Link from 'next/link';


export default function SectionLandinPage(props: any) {
    return (
        <>
            <section className={style.section_presentation} id='home'>
                <div className={style.box_presentation}>
                    <div className={style.text_presentation}>
                        <h1><strong>DONATION OUTSOURCING SERVICES</strong></h1>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, iusto nihil nostrum asperiores inventore <strong>accusantium perspiciatis</strong>  suscipit, debitis impedit non dolore fuga ratione, temporibus minus voluptatum! Inventore quaerat minima fugit.</h3>
                        <Link href={"/pages/doacoes"}><button className={style.btn_doar_home}>QUERO DOAR</button></Link>
                    </div>
                    <div ><img className={style.img_landingpage} src="/images/undraw.png" alt="" /></div>
                </div>
            </section>
        </>
    )
}

