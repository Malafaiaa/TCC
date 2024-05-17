/*
  Warnings:

  - You are about to drop the column `companyId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_companyId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "companyId";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "companyId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cnpj" TEXT;

-- DropTable
DROP TABLE "Company";

-- CreateIndex
CREATE UNIQUE INDEX "User_cnpj_key" ON "User"("cnpj");
