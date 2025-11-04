import { Router } from "express";
import { PrismaClient } from "../generated/prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const businesses = await prisma.business.findMany({
      where: { status: "active" },
      include: {
        category: true,
        address: true,
        medias: true,
      },
    });
    res.json(businesses);
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
