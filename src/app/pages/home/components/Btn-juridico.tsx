"use client"
import Link from "next/link"
import "../styles.css"

export default function BtnJuridico(props) {
    return (
        <>
            <div>
                <Link href="/pages/login"> <button className="btn-juridico" type="button" >Instituição</button></Link>
            </div>
        </>
    )
}

