import { Router } from "express";
import { PrismaClient } from "../generated/prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

export default router;
