import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";
import HeaderTeste from "../home/components/Header-teste";
import Search from "@/components/search";
import OngItem from "@/components/ong-item-payment";

interface OngsPageProps {
  searchParams: {
    search?: string;
  };
}

const OngsPage = async ({ searchParams }:OngsPageProps) => {
  if (!searchParams.search) {
    return redirect("/pages/instituicoes-participantes");
  }

  const ongs = await db.ong.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  });

  return (
    <>
      <HeaderTeste />

      <div className="px-5 py-6 flex flex-col gap-6">
        {/* <Search
          defaultValues={{
            search: searchParams.search,
          }}
        /> */}

        <h1 className="text-gray-400 font-bold text-xs uppercase">Resultados para &quot;{searchParams.search}&quot;</h1>

        <div className="grid grid-cols-2 gap-4">
          {ongs.map((ong) => (
            <div key={ong.id} className="w-full">
              <OngItem ong={ong} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OngsPage;