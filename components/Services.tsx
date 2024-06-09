"use client";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons1";


interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Colaboração em Projetos",
    description:
      "Facilitamos a colaboração entre doadores e Instituição para maximizar o impacto das doações.",
    icon: <ChartIcon />,
  },
  {
    title: "Gestão de Doações",
    description:
      "Nossa plataforma ajuda a gerenciar doações de forma eficiente, garantindo transparência e confiança.",
    icon: <WalletIcon />,
  },
  {
    title: "Automação de Tarefas",
    description:
      "Automatizamos processos de doação, simplificando a experiência para doadores e organizações.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>

        <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-2xl dark:text-white">Centrado no Usuário</h1>
          <h2 className="text-3xl md:text-4xl font-bold">
            
            
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Nossa plataforma promove a cultura da doação, conectando doadores e beneficiários de maneira eficaz e transparente.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={ "/images/centradoU.svg"}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
      
    </section>
  );
};
