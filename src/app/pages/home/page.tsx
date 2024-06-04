
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import Footer from "../home/components/Footer";
import Header from "./components/Header";
import SectionLandinPage from "./components/Section-landing-page";
import SectionData from "./components/Section-data";
import SectionAboutUs from "./components/Section-about";
import SectionServices from "./components/Section-services";
import SectionDuvidas from "./components/section-duvidas";
import BackgroundSVG from "./components/BackgroundSVG";
import BackgroundSVG2 from "./components/Background2SVG";


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
