
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

function App(
) {
    return (
        <>
            <Navbar />
            <Hero />
            <Sponsors />
            <About />
            <HowItWorks />

            <Services />

            <Testimonials />
            <Team />



            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;
