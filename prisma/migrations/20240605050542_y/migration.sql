-- CreateTable
CREATE TABLE "Ong" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "donation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
