"use client"

import Menu from "./Menu"
import BtnHeader from "./Btn-header"
import "../styles.css"
import MenuEmpresa from "./Menu.empresa"

function HeaderEmpresa(props) {
    return (
        <>
            <div className="header">
                <a href="/">
                    <img className="img-logo" src="" alt="" />
                </a>
                <MenuEmpresa />
                <BtnHeader />
                
            </div>
        </>
    )
}

export default HeaderEmpresa