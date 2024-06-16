"use client"
import { Button } from "./ui/button";
import Link from "next/link";
import ImgJuridico from "@/src/app/pages/juridico/components/IMG-juridico";

export const HeroJuridico = () => {
  return (
    <section id="home" className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#0066cc]  to-[#004c97] text-transparent bg-clip-text">
              DoaçON:
            </span>{" "}
             cadastre
          </h1>{" "}
          a sua{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#0066cc]  to-[#004c97] text-transparent bg-clip-text">
              Instituição!
            </span>{" "}
           
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Cadastre sua ONG na <strong className="font-semibold text-gray-900 dark:text-white">DoaçON</strong> e descubra como mobilizar recursos de forma simples e eficiente. Nossa plataforma facilita o processo de captação de recursos, permitindo que você dedique mais tempo ao seu trabalho vital de transformar vidas. Juntos, podemos criar um mundo melhor, onde cada contribuição faz a diferença.<strong className="font-semibold text-gray-900 dark:text-white"> Junte-se a nós e potencialize sua missão de impacto social!</strong>
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/pages/add-cadastro"> <Button className=" w-full md:w-1/3 text-white ">Cadastre a sua Instituição</Button></Link>
        

        
        </div>
      </div>

      {/* image do home juridico */}
      <ImgJuridico/> 
      {/* image do home juridico */}
     

      {/* Shadow effect */}
      <div className="shadow"></div>
      
    </section>
   
  );
};