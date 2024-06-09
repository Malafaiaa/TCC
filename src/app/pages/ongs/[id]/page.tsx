
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
    <div>
      <OngInfo ong={ong} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {ong.donations.map((donation) => (
          <ServiceItem key={donation.id} ong={ong} donation={donation} isAuthenticated={!!session?.user} />
        ))}
      </div>
    </div>
  );
};

export default OngDatailsPage;