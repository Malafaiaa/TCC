"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from 'next/image'; // Importing the Image component from next/image

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pinimg.com/564x/22/77/59/22775902a94794446eb686bbf24d7458.jpg",
    name: "Guilherme Malafaia",
    position: "Back-End Developer",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      {
        name: "Github",
        url: "https://github.com/Malafaiaa",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/malafa_/",
      },
    ],
  },
  {
    imageUrl: "https://i.pinimg.com/564x/66/2a/de/662ade708ed011071343861f3b10eef2.jpg",
    name: "Gabriel Godinho",
    position: "Back-End Developer",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      {
        name: "Github",
        url: "https://github.com/GabrielGodinhoReis",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/godinho_444/",
      },
    ],
  },
  {
    imageUrl: "https://i.pinimg.com/564x/d5/ea/7a/d5ea7a91674c24d02f6311036b2ced38.jpg",
    name: "João Sant",
    position:  "Frontend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "#" },

      {
        name: "Github",
        url: "https://github.com/joao-santvi",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/joao.hrqz/",
      },
    ],
  },
  {
    imageUrl: "https://i.pinimg.com/564x/b0/39/1a/b0391af60d8fec242187bb3b8ddfbbc4.jpg",
    name: "Mariah Godoy",
    position: "Frontend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      {
        name: "Github",
        url: "#",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/md.godoy_/ss",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Github":
        return <Github size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        POWER RANGERS
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
        Equipe Power Rangers da Etec Paulistano
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <Image
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  width={96} // Adjust the width as per your requirements
                  height={96} // Adjust the height as per your requirements
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2"></CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
