"use client"
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section id="home" className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              doaçON
            </span>{" "}
             a plataforma
          </h1>{" "}
          que gera{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Amor
            </span>{" "}
           
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Junte-se a nós e faça a sua contribuição hoje! Com apenas alguns cliques, você pode fazer a diferença na vida de muitas pessoas. Vamos unir nossos esforços para construir um mundo melhor para todos. Sua ajuda é valiosa e pode mudar vidas. Faça a sua parte agora e faça a diferença!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className=" w-full md:w-1/3 text-white ">Doar</Button>
        

        
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};