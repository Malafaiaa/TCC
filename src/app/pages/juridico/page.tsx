"use client"

import Header from "../home/components/Header"
import HeaderEmpresa from "../home/components/Header-empresa"
import SectionAboutUs from "../home/components/Section-about"
import SectionBeneficiosEmpresas from "../home/components/Section-about-empresa"
import SectionCadastroEmpresas from "../home/components/Section-data"
import SectionData from "../home/components/Section-data"
import SectionLandinPage from "../home/components/Section-landing-page"
import SectionLandinPageEmpresas from "../home/components/Section-landing-page-empresas"
import SectionServices from "../home/components/Section-services"



export default function juridico(props){
    return(<>
 <HeaderEmpresa/>
    <SectionLandinPageEmpresas />
    <SectionCadastroEmpresas />
    <SectionBeneficiosEmpresas />
   
    
    

    </>)
}