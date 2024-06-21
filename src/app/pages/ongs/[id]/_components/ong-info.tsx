"use client";


import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Ong } from "@prisma/client";
import { ChevronLeftIcon, Mail, MapPinIcon, MenuIcon, PhoneCall, PhoneIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SideMenu from "../../../home/components/side-menu";

interface OngInfoProps {
  ong: Ong;
}

const OngInfo = ({ ong }:OngInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.replace("/pages/instituicoes-participantes");
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-4 left-4">
          <ChevronLeftIcon />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          src={ong.imageUrl}
          fill
          alt={ong.name}
          style={{
            objectFit: "cover",
          }}
          className="opacity-75"
        />
      </div>

      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold">{ong.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{ong.address}</p>
          
        </div>
        <div className="flex items-center gap-1 mt-2">
          <Mail className="text-primary" size={18} />
          <p className="text-sm">{ong.email}</p>
          
        </div>
        <div className="flex items-center gap-1 mt-2">
          <PhoneIcon className="text-primary" size={18} />
          <p className="text-sm">{ong.telefone}</p>
          
        </div>
        {/* <div className="flex items-center gap-1 mt-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div> */}
      </div>
    </div>
  );
};

export default OngInfo;