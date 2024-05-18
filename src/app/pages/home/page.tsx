
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
import SectionDuvidas from "./components/Section-duvidas";

function App(
) {
    return (
        <>
            <SectionLandinPage />
            <Hero />
            <Sponsors />



            <Services />





            <Footer />
            <ScrollToTop />


            <Header />

            <SectionData />
            <About />
            <HowItWorks />
            <SectionAboutUs />
            <SectionServices />
            <Testimonials />
            <Team />
            <SectionDuvidas />

        </>
    );
}

export default App;
