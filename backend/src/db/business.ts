import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllBusinesses() {
  return await prisma.business.findMany({
    where: { status: "active" },
    include: {
      category: true,
      address: true,
      medias: true,
    },
  });
}
