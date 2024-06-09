"use client";


import { ptBR } from "date-fns/locale";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import { saveBooking } from "../_actions/save-booking";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Ong, donation } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";


interface ServiceItemProps {
  ong: Ong;
  donation: donation;
  isAuthenticated: boolean;
}

const ServiceItem = ({ donation, ong, isAuthenticated }) => {
  const router = useRouter();

  const { data } = useSession();

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  useEffect(() => {
    if (!date) {
      return;
    }

    // Aqui você pode colocar qualquer lógica relacionada à manipulação da data, se necessário.

  }, [date]);

  const handleDateClick = (date: Date | undefined) => {
    setDate(date);
  };

  const handleBookingClick = () => {
    if (!isAuthenticated) {
      return signIn("google");
    }
    setSheetIsOpen(true);
  };

  const handleBookingSubmit = async () => {
    setSubmitIsLoading(true);

    try {
      if (!date || !data?.user) {
        return;
      }

      await saveBooking({
        donationId: donation.id,
        ongId: ong.id,
        date: date,
        userId: (data.user as any).id,
      });

      setSheetIsOpen(false);
      setDate(undefined);
      toast("Sua doação foi feita!", {
        description: format(date, "'Para' dd 'de' MMMM", {
          locale: ptBR,
        }),
        action: {
          label: "Visualizar",
          onClick: () => router.push("/bookings"),
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-3 w-full">
        <div className="flex gap-4 items-center w-full">
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              className="rounded-lg"
              src={donation.imageUrl}
              fill
              style={{ objectFit: "contain" }}
              alt={donation.name}
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold">{donation.name}</h2>
            <p className="text-sm text-gray-400">{donation.description}</p>

            <div className="flex items-center justify-between mt-3">

              <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="secondary" onClick={handleBookingClick}>
                    Doar
                  </Button>
                </SheetTrigger>

                <SheetContent className="p-0">
                  <SheetHeader className="text-left px-5 py-6 border-b border-solid border-secondary">
                    <SheetTitle>Escolha a data da doação</SheetTitle>
                  </SheetHeader>

                  <div className="py-6">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateClick}
                      locale={ptBR}
                      fromDate={addDays(new Date(), 1)}
                      styles={{
                        head_cell: {
                          width: "100%",
                          textTransform: "capitalize",
                        },
                        cell: {
                          width: "100%",
                        },
                        button: {
                          width: "100%",
                        },
                        nav_button_previous: {
                          width: "32px",
                          height: "32px",
                        },
                        nav_button_next: {
                          width: "32px",
                          height: "32px",
                        },
                        caption: {
                          textTransform: "capitalize",
                        },
                      }}
                    />
                  </div>

                  <SheetFooter className="px-5">
                    <Button onClick={handleBookingSubmit} disabled={!date || submitIsLoading}>
                      {submitIsLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Confirmar doação
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;