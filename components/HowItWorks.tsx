import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "./Icons1";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Acessibilidade",
    description: "Plataforma fácil de usar para incentivar doações.",
  },
  {
    icon: <MapIcon />,
    title: "Comunidade",
    description: "Promove a conexão entre doadores e beneficiários.",
  },
  {
    icon: <PlaneIcon />,
    title: "Escalabilidade",
    description: "Modelo sustentável que pode ser replicado em outras regiões.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamificação",
    description: "Incentiva a participação através de gratificação e reconhecimento.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="recursos"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">

       <p> Exemplos</p>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Saiba como nossa plataforma promove a cultura da doação e conecta doadores a beneficiários de forma fácil e eficaz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 text-center"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-center">
                {icon}
                <span>{title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};