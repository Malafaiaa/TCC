"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "/images/perfil1.jpg",
    name: "Sofia Monteiro",
    userName: "@SoffiMonteiro01",
    comment: "A plataforma facilitou muito as minhas doações. É intuitiva e eficiente!",
  },
  {
    image: "/images/perfil2.jpg",
    name: "Júlia Alves",
    userName: "@juju.alvessz",
    comment:
      "Conectar com beneficiários nunca foi tão fácil. A gestão de doações é incrível.",
  },
  {
    image: "/images/perfil3.jpg",
    name: "Henrique Oliveira",
    userName: "@henrique.oli",
    comment:
      "A automação de tarefas simplificou o processo de doação, tornando tudo mais rápido e seguro.",
  },
  {
    image:"/images/perfil4.jpg",
    name: "Patrícia Vieira",
    userName: "@paty.vieira1",
    comment:
      "A transparência da plataforma me deu confiança para doar regularmente. Recomendo a todos!",
  },
  {
    image: "/images/perfil5.jpg",
    name: "Sabrina Martins",
    userName: "@sasa.martins005",
    comment:
      "Ótima experiência! A plataforma realmente promove a cultura da doação de forma inovadora.",
  },
  {
    image: "/images/perfil6.jpg",
    name: "Renan Reis",
    userName: "@renanZ.0001",
    comment:
      "Participar dessa comunidade de doadores tem sido extremamente gratificante. Adoro a interface!",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testemunhas"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        Descubra porque as pessoas amam esta plataforma
      </h2>

      <p className=" text-center text-xl text-muted-foreground pt-4 pb-8">
        Veja o que nossos usuários dizem sobre como a plataforma transformou suas experiências de doação.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};