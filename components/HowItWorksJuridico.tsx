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
    title: "🚀 Voe Mais Alto",
    description: "Em nossa plataforma, sua organização terá o espaço e os recursos para alçar voos ainda mais altos em direção aos seus objetivos. Com ferramentas intuitivas e poderosas, vocês podem criar campanhas que tocam os corações de doadores generosos em todos os cantos do mundo.",
  },
  {
    icon: <MapIcon />,
    title: "🌍 Conecte-se com o Mundo",
    description: "Não importa onde estejam, as barreiras geográficas desaparecem quando vocês se juntam a nós. Conectem-se instantaneamente com uma rede global de apoiadores apaixonados, prontos para fazer a diferença ao seu lado.",
  },
  {
    icon: <PlaneIcon />,
    title: "💡 Inovação com Propósito",
    description: "Abraçamos a tecnologia com um propósito claro: impulsionar o bem no mundo. Com as mais recentes inovações em doações online, estamos redefinindo o que é possível e capacitando organizações como a sua a alcançar novos horizontes de sucesso.",
  },
  {
    icon: <GiftIcon />,
    title: "🤝 Parceiros de Confiança",
    description: " Aqui, vocês encontrarão mais do que uma plataforma; encontrarão verdadeiros parceiros comprometidos com sua causa. Nossa equipe dedicada está pronta para apoiá-los em cada passo do caminho, garantindo que suas iniciativas recebam o reconhecimento e o apoio que merecem.",
  },
];

export const HowItWorksJuridico = () => {
  return (
    <section
      id="recursos"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">

       <p> BENEFÍCIOS </p>
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