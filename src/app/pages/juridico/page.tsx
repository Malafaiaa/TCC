'use client'

import React from "react";
import { Navbar } from "@/components/Navbar";
import BackgroundSVG from "./components/BackgroundSVG";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ScrollToTop } from "@/components/ScrollToTop";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import SectionServices from "./components/Section-services";
import SectionDuvidas from "./components/Section-duvidas";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";


function App(props: any) {
    return (
        <>
        
            <Navbar></Navbar>
            <BackgroundSVG></BackgroundSVG>
            <Hero />
            <Services />
            <ScrollToTop />
            <About />
            <HowItWorks />
            <SectionServices />
            <SectionDuvidas />
            <Testimonials />
            <Team />

        </>
    );
}

export default App;
