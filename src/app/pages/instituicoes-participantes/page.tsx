import { Navbar } from "@/components/Navbar";
import OngItem from "@/components/ong-item";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import HeaderEmpresa from "../home/components/Header-empresa";
import HeaderTeste from "../home/components/Header-teste";

export default async function InstituPart() {
  const session = await getServerSession(authOptions);

  // Fetch the ong data from the database
  const ongs = await db.ong.findMany(); // Assuming you have a Prisma model called "ong"

  return (
    <div>
      <HeaderTeste />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">
          {session?.user ? `Olá, ${session.user.name?.split(" ")[0]}!` : "Olá! Vamos fazer uma doação hoje?"}
        </h2>
      </div>
      <div className="px-5 mt-6">
        {/* <Search /> */}
      </div>
      {/* Uncomment and use if necessary
      <div className="mt-6">
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="pl-5 text-xs mb-3 uppercase text-gray-400 font-bold">Doações</h2>
            <div className="px-5 flex gap-3 overflow-x-auto">
              {confirmedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
              ))}
            </div>
          </>
        )}
      </div>
      */}
      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendadas</h2>
        <div className="flex px-5 gap-4 overflow-x-auto" style={{ overflowX: 'scroll' }}>
          {ongs.map((ong) => (
            <div key={ong.id} className="min-w-[167px] max-w-[167px]">
              <OngItem ong={ong} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Populares</h2>
        <div className="flex px-5 gap-4 overflow-x-auto" style={{ overflowX: 'scroll' }}>
          {ongs.map((ong) => (
            <div key={ong.id} className="min-w-[167px] max-w-[167px]">
              <OngItem ong={ong} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}