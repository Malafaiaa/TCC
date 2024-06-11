import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
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

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="/images/perfil1.jpg"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Sofia Monteiro</CardTitle>
            <CardDescription>@SoffiMonteiro01</CardDescription>
          </div>
        </CardHeader>

        <CardContent>ótima plataforma para ser solidario!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src= "/images/ong-abraco-quentinho.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Abraço Quentinho</CardTitle>
          <CardDescription className="font-normal text-red-600">
            Instituição Parceira
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
          "Amor é um sentimento humano que mantém as pessoas conectadas e comprometidas umas com as outras."                                                                                                                       
          </p>
        </CardContent>

        <CardFooter>
          
          
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src= "/images/perfil6.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
         
            <Badge
              variant="secondary"
              className="text-sm text-default"
            >
              Doador popular
            </Badge>
          
          <div>
            <span className="text-3xl font-bold">R$5.000</span>
            <span className="text-muted-foreground"> /Mês</span>
          </div>

          <CardDescription className="text-center text-black">
            Renan foi o maior contribuibudor do mês, seja você o proximo!
          </CardDescription>
        </CardHeader>

        <CardContent>
           <Link href="/pages/instituicoes-participantes"> <Button className=" w-full  text-white ">Doer apertando aqui</Button></Link>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Impacto direto", "Sentimento de realização", "Fazer parte de algo maior"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Heart className="text-blue-900" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>DoaçON</CardTitle>
            <CardDescription className="text-md mt-2">
              A DoaçON tem impacto direto com milhares de doaçôes e causas carentes.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
