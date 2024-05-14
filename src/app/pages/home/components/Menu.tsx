
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { animateScroll } from 'react-scroll';

import "../styles.css";

function Menu() {
    const { data: session } = useSession();
    const isAuthenticated = !!session; // Verifica se há uma sessão ativa

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const options = {
        // your options here, for example:
        duration: 100,
        smooth: true,
    };

    animateScroll.scrollToTop(options);

    return (
        <div className="menu">
            <a onClick={scrollToTop}>Home</a>
            {isAuthenticated && <a href="/publications">Publicações</a>}
            <a href="/pages/instituicoes-participantes">Instituições Participantes</a>
            <Link to="about_us" spy={true}smooth={true}offset={-100}duration={600} >Sobre Nós</Link>
            <Link to="section_data" spy={true} smooth={true} offset={-100} duration={600} >Porque Doar?</Link>
        </div>
    );

}

export default Menu;