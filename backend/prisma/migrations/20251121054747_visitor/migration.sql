-- CreateTable
CREATE TABLE "Visitor" (
    "id" SERIAL NOT NULL,
    "mobile" TEXT NOT NULL,
    "otp" TEXT,
    "otpExpiredAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',

    CONSTRAINT "Visitor_pkey" PRIMARY KEY ("id")
);
