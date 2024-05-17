import { Apple, Facebook, Instagram, Radar, Twitch, Twitter, Youtube } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
  color?: string; // Adicionamos uma propriedade opcional para a cor do ícone
}

const sponsors: SponsorProps[] = [
  {
    icon: <Facebook size={34} />,
    name: "Facebook",
    color: "#4267B2", // Cor do Facebook
  },
  {
    icon: <Instagram size={34} />,
    name: "Instagram",
    color: "#FF69B4", // Cor do Instagram
  },
  {
    icon: <Youtube size={34} />,
    name: "Youtube",
    color: "#FF0000", // Cor do Youtube
  },
  {
    icon: <Twitter size={34} />,
    name: "Twitter",
    color: "#1DA1F2", // Cor do Twitter
  },
  {
    icon: <Apple size={34} />,
    name: "Apple",
    color: "#000000", // Cor da Apple
  },
  {
    icon: <Twitch size={34} />,
    name: "Twitch",
    color: "#6441A4", // Cor da Twitch
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Investidores e Patrocinadores
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name, color }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span style={{ color }}>{icon}</span> {/* Aplicamos a cor dinamicamente usando inline style */}
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
