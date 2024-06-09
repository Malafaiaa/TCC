import { db } from '@/lib/prisma';
import { donation } from '@prisma/client';


interface SaveBookingParams {
  ongId: string;
  donationId: string;
  userId: string;
  date: Date;
}

export const saveBooking = async (params: SaveBookingParams) => {
  await db.booking.create({
    data: {
      donationId: params.donationId,
      userId: params.userId,
      date: params.date,
      ongId: params.ongId,
    },
  });
};