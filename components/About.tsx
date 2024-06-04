"use client"
import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={"/images/luffy.jpeg"}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                DoaçON
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Doar é um ato de generosidade que pode transformar vidas e comunidades. No início de um projeto de TCC na ETEC paulistano, foi estudada e incentivada a cultura da doação na cidade de São Paulo. A iniciativa destacou a conexão entre doadores e beneficiários, promovendo um ciclo de bondade. O projeto resultou em um aumento significativo na conscientização e participação em doações, com empresas e voluntários se unindo à causa. Esse movimento criou uma comunidade mais unida e resiliente. O projeto, iniciado como um estudo acadêmico, tornou-se um movimento inspirador que continua a crescer.









              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
