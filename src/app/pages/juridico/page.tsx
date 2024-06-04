'use client'

import React from "react";
import { Navbar } from "@/components/Navbar";
import BackgroundSVG from "./components/BackgroundSVG";
import { HeroJuridico } from "@/components/HeroJuridico";
import { ScrollToTop } from "@/components/ScrollToTop";
import { About } from "@/components/About";
import SectionServices from "./components/Section-services";
import SectionDuvidas from "./components/Section-duvidas";
import { Team } from "@/components/Team";
import { TestimonialsJuridico } from "@/components/TestimonialsJuridico";
import { HowItWorksJuridico } from "@/components/HowItWorksJuridico";
import { ServicesJuridico } from "@/components/ServicesJuridico";


function App(props: any) {
    return (
        <>
        
            <Navbar></Navbar>
            <BackgroundSVG></BackgroundSVG>
            <HeroJuridico />
            <SectionServices />
            <ServicesJuridico />
            <ScrollToTop />
            <About />
            <HowItWorksJuridico />
            <SectionDuvidas />
            <TestimonialsJuridico />
            <Team />

        </>
    );
}

export default App;
