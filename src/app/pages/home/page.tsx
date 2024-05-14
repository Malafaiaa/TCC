"use client"

import Header from "./components/Header";
import SectionData from "./components/Section-data";
import SectionLandinPage from "./components/Section-landing-page";
import SectionAboutUs from "./components/Section-about";
import SectionServices from "./components/Section-services";


export default function Home(){
    return(<>
    <Header />
    <SectionLandinPage />
    <SectionData />
    <SectionAboutUs />
    <SectionServices />
    
    

    </>)
}