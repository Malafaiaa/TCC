"use client"

import style from '../styles.module.css'

type CardInstituicoesProps = {
    img?:string;
    name?:string;
}

function CardInstituicoes(props: CardInstituicoesProps) {
    return (
        <>
            <div className={style.container_card}>
                <img className={style.img_card} src={props.img} alt="" />
                <div className={style.name_card}>{props.name}</div>
                <button className={style.btn_card} >Saiba mais</button>
            </div>
        </>
    )
}

export default CardInstituicoes