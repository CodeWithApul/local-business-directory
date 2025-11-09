import { Router } from "express";
import { PrismaClient } from "../generated/prisma/client";
import { SortOrder } from "../generated/prisma/internal/prismaNamespace";

const router = Router();
const prisma = new PrismaClient();

router.get(["/", "/list"], async (req, res) => {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: { name: SortOrder.asc },
  });
  res.json(categories);
});

router.post("/create", async (req, res) => {
  const category = await prisma.category.create({
    data: {
      name: req.body.name,
    },
  });
  res.json(category);
});

export default router;
