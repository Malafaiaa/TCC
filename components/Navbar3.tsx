
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";

import { Link } from 'react-scroll';
import { StarHalf } from 'lucide-react';

import Search from "./search";
import BtnHeader3 from "@/src/app/pages/home/components/Btn-header3";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  
];

export const Navbar3 = () => {
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
          <NavigationMenuItem className="font-bold  w-full">
           <Search></Search>
            
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
           
          </nav>

          {/* Botão que aparecerá apenas em telas menores que o tamanho médio (celular) */}
          <div className="md:hidden">
            <BtnHeader3 />
          </div>
          
          {/* Placeholder vazio para manter a posição do BtnHeader em desktop */}
          <div className="hidden md:flex">
          <BtnHeader3 />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};