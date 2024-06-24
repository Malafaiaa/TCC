
import BarbershopInfo from "./_components/ong-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";

import OngInfo from "./_components/ong-info";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";

interface OngDetailsPageProps {
  params: {
    id?: string;
  };
}

const OngDatailsPage = async ({ params }:OngDetailsPageProps) => {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    // TODO: redirecionar para home page
    return null;
  }

  const ong = await db.ong.findUnique({
    where: {
      id: params.id,
    },
    include: {
      donations: true,
    },
  });

  if (!ong) {
    // TODO: redirecionar para home page
    return null;
  }

  return (
    <section className=" w-full">
   <div className="flex flex-col rounded-lg  shadow-none  md:shadow-lg m-0 md:m-24 border-none md:border md:border-solid md:border-gray-300   p-6">
      <OngInfo ong={ong} />

      <div className=" px-5 flex flex-col gap-4 py-6">
        {ong.donations.map((donation) => (
          <ServiceItem key={donation.id} ong={ong} donation={donation} isAuthenticated={!!session?.user} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default OngDatailsPage;