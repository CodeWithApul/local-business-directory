/*
  Warnings:

  - You are about to drop the column `businessId` on the `Address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `Business` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Address" DROP CONSTRAINT "Address_businessId_fkey";

-- DropIndex
DROP INDEX "public"."Address_businessId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "businessId";

-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "addressId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Business_addressId_key" ON "Business"("addressId");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
