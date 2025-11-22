-- CreateTable
CREATE TABLE
    "VisitorBusinessView" (
        "id" SERIAL NOT NULL,
        "visitorId" INTEGER NOT NULL,
        "businessId" INTEGER NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        "status" TEXT NOT NULL DEFAULT 'active',
        CONSTRAINT "VisitorBusinessView_pkey" PRIMARY KEY ("id")
    );

-- AddForeignKey
ALTER TABLE "VisitorBusinessView" ADD CONSTRAINT "VisitorBusinessView_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitorBusinessView" ADD CONSTRAINT "VisitorBusinessView_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;