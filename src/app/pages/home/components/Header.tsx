"use client"

import Menu from "./Menu"
import BtnHeader from "./Btn-header"
import "../styles.css"

function Header(props: any) {
    return (
        <>
            <div className="header">
                <a href="/">
                    <img className="img-logo" src="" alt="" />
                </a>
                <Menu />
                <BtnHeader />
                
            </div>
        </>
    )
}

export default Header