'use client'

import React from "react";
import { HeroJuridico } from "@/components/HeroJuridico";
import { ScrollToTop } from "@/components/ScrollToTop";
import { About } from "@/components/About";
import SectionServices from "./components/Section-services";
import SectionDuvidas from "./components/Section-duvidas";
import { Team } from "@/components/Team";
import { TestimonialsJuridico } from "@/components/TestimonialsJuridico";
import { HowItWorksJuridico } from "@/components/HowItWorksJuridico";
import { ServicesJuridico } from "@/components/ServicesJuridico";
import { NavbarJuridico } from "@/components/NavbarJuridico";
import Footer from "../home/components/Footer";
import SectionEventos from "./components/Section-eventos";
import SectionParcerias from "./components/Section-parcerias";



function App(props: any) {
    return (
        <>
            <NavbarJuridico></NavbarJuridico>
            <HeroJuridico />
            <SectionServices />
            <ServicesJuridico />
            <ScrollToTop />
            <About />
            <HowItWorksJuridico />
            <SectionDuvidas />
            <TestimonialsJuridico />
            <SectionEventos/>
            <SectionParcerias/>
            <Team />
            <Footer/>

        </>
    );
}

export default App;
