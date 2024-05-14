"use client"
import Link from "next/link"
import "../styles.css"

export default function BtnDoar() {
    return (
        <>
            <div>
                <Link href="/pages/doacoes"> <button className="" type="button" >Quero Doar</button></Link>
            </div>
        </>
    )
}

