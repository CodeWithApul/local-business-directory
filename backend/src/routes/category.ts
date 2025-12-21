import { Router } from "express";

import { PrismaClient } from "../generated/prisma/client.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { CategorySchema } from "../schema/category.js";

import type { Request, Response } from "express";
const router = Router();
const prisma = new PrismaClient();

router.get(["/", "/list"], async (_req: Request, res: Response) => {
  const categories = await prisma.category.findMany({
    where: { parentId: null },
    select: {
      id: true,
      name: true,
      children: {
        select: {
          id: true,
          name: true,
        },
        orderBy: { name: "asc" },
      },
    },
    orderBy: { name: "asc" },
  });
  res.json(categories);
});

router.post(
  "/create",
  validateSchema(CategorySchema),
  async (req: Request, res: Response) => {
    const category = await prisma.category.create({
      data: {
        name: req.body.name,
      },
    });
    res.json(category);
  }
);

export default router;
