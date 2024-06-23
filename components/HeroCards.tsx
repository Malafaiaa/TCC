import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons1";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from 'next/image'; // Importing the Image component from next/image

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row gap-8 relative w-full max-w-[800px]">
      {/* Team */}
      <Card className="w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <Image
            src="/images/ong-abraco-quentinho.jpg"
            alt="user avatar"
            width={96} // Adjust the width and height as per your requirements
            height={96}
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center mt-12">Abra&ccedil;o Quentinho</CardTitle>
          <CardDescription className="font-normal text-red-600">
            Institui&ccedil;&atilde;o Parceira
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            &quot;Amor &eacute; um sentimento humano que mant&eacute;m as pessoas conectadas e comprometidas umas com as outras.&quot;
          </p>
        </CardContent>

        <CardFooter>
          {/* Additional content can be added here */}
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="w-80 flex flex-col drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex flex-col items-center pb-2">
          <Image
            src="/images/perfil6.jpg"
            alt="user avatar"
            width={96} // Adjust the width and height as per your requirements
            height={96}
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <Badge
            variant="secondary"
            className="text-sm text-default mt-12"
          >
            Doador popular
          </Badge>

          <div className="text-center mt-4">
            <span className="text-3xl font-bold">R$5.000</span>
            <span className="text-muted-foreground"> /Mês</span>
          </div>

          <CardDescription className="text-center text-black mt-4">
            Renan foi o maior contribuibudor do mês, seja você o próximo!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Link href="/pages/instituicoes-participantes">
            <Button className="w-full text-white">Doar apertando aqui</Button>
          </Link>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex flex-col items-center">
          <div className="space-y-4">
            {["Impacto direto", "Sentimento de realização", "Fazer parte de algo maior"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex items-center"
                >
                  <Heart className="text-blue-900" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};