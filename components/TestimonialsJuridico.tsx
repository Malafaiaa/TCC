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
    image: "/images/ong1.jpg",
    name: "Associação Solidariedade Global",
    userName: "Instituição Verificada",
    comment: "A plataforma revolucionou nosso recebimento de doações. Agora, conseguimos captar recursos de forma organizada e transparente. A interface é intuitiva e eficaz!",
  },
  {
    image: "/images/ong2.jpg",
    name: "Instituto Luz da Esperança",
    userName: "Instituição Verificada",
    comment:
      "Desde que nos cadastramos, o recebimento de doações tornou-se muito eficiente. Conectar com doadores é simples e a gestão das doações é eficaz.",
  },
  {
    image: "/images/ong3.jpg",
    name: "Fundação Coração Aberto",
    userName: "Instituição Verificada",
    comment:
      "A automação das doações nos permite focar mais em nossa missão. Receber doações é rápido e seguro, e estamos alcançando mais doadores do que nunca.",
  },
  {
    image:"/images/ong4.jpg",
    name: "Projeto Vida em Movimento",
    userName: "Instituição Verificada",
    comment:
      "A plataforma trouxe transparência e confiança no recebimento de doações. A facilidade de uso nos permite gerenciar tudo com regularidade e precisão. Recomendo a todas as ONGs!",
  },
  {
    image: "/images/ong5.jpg",
    name: "Associação Mãos que Transformam",
    userName: "Instituição Verificada",
    comment:
      "Nossa experiência com a plataforma tem sido excelente! Receber doações nunca foi tão simples e eficiente. A inovação do sistema realmente ajuda a promover a cultura da doação.",
  },
  {
    image: "/images/ong6.jpg",
    name: "ONG Esperança Renovada",
    userName: "Instituição Verificada",
    comment:
      "Participar desta comunidade de doadores tem sido extremamente gratificante. A interface amigável e os benefícios oferecidos tornaram o recebimento de doações muito mais organizado.",
  },
];

export const TestimonialsJuridico = () => {
  return (
    <section
      id="testemunhas"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        Descubra porque as Instituições amam esta plataforma
      </h2>

      <p className=" text-center text-xl text-muted-foreground pt-4 pb-8">
        Veja o que nossas Instituição participantes dizem sobre como a plataforma transformou suas experiências de doação.
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