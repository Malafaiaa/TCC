"use client";

import { Ong} from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface OngItemProps {
 ong: Ong;
}

const OngItem = ({ ong }: OngItemProps) => {
  const router = useRouter();

  const handleDonationClick = () => {
    router.push(`/${ong.id}`);
  };

  return (
    <Card className="min-w-full max-w-full rounded-2xl">
      <CardContent className="px-1 py-0 pt-1">
        <div className="w-full h-[159px] relative">
          <div className="absolute top-2 left-2 z-50">
            {/* <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
              <StarIcon size={12} className="fill-yellow-500 text-yellow-500" />
              <span className="text-xs text-white">5,0</span>
            </Badge> */}
          </div>
          <Image
            alt={ong.name}
            src={ong.imageUrl}
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-2xl"
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{ong.name}</h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{ong.address}</p>
          <Button className="w-full mt-3" variant="secondary" onClick={handleDonationClick}>
            Doar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OngItem;