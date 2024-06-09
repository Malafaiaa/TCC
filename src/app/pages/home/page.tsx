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




function    App(props: any) {
    return (
        <>
            <Navbar></Navbar>
            {/* <BackgroundSVG></BackgroundSVG> */}
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
