import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons1";
import { Link } from 'react-scroll';
import { StarHalf } from 'lucide-react';
import BtnHeader from "@/src/app/pages/home/components/Btn-header";
import BtnHeader2 from "@/src/app/pages/home/components/Btn-header2";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "home",
    label: "DoaçON",
  },
  {
    href: "about",
    label: "Sobre",
  },
  {
    href: "beneficios",
    label: "Beneficios",
  },
  {
    href: "testemunhas",
    label: "Comentários",
  },
];

export const NavbarJuridico = () => {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <StarHalf />
              DoaçON
            </a>
          </NavigationMenuItem>

          {/* desktop navegação */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                to={route.href}
                key={i}
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
            <a href="/" className={`text-[17px] ${buttonVariants({ variant: "ghost" })} bg-white text-black hover:bg-gray-100 ml-20 text-decoration underline`}>
  Doador
</a>
          </nav>

          {/* Botão que aparecerá apenas em telas menores que o tamanho médio (celular) */}
          <div className="md:hidden">
            <BtnHeader />
          </div>
          
          {/* Placeholder vazio para manter a posição do BtnHeader em desktop */}
          <div className="hidden md:flex">
          <BtnHeader2 />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};