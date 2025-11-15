-- CreateTable
CREATE TABLE "BusinessBooking" (
    "id" SERIAL NOT NULL,
    "businessId" INTEGER NOT NULL,
    "bookingStartTime" TIMESTAMP(3) NOT NULL,
    "bookingEndTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',

    CONSTRAINT "BusinessBooking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BusinessBooking" ADD CONSTRAINT "BusinessBooking_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
