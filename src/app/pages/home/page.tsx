import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import SectionServices from "./components/Section-services";
import SectionDuvidas from "./components/section-duvidas";
import SectionFaleConosco from "./components/Section-faleconosco";
import Footer from "./components/Footer";




function    App(props: any) {
    return (
        <>
            <Navbar></Navbar>
            <Hero />
            <Services />
            <ScrollToTop />
            <About />
            <HowItWorks />
            <SectionServices />
            <SectionDuvidas />
            <Testimonials />
            <Team />
            <SectionFaleConosco/>
            <Footer/>
        </>
    );
}

export default App;
