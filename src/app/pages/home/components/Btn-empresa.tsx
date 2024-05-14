"use client"
import Link from "next/link"
import "../styles.css"

export default function BtnDoar(props: any) {
    return (
        <>
            <div>
                <Link href="/pages/doacoes"> <button className="" type="button" >Quero cadastrar minha empresa</button></Link>
            </div>
        </>
    )
}

