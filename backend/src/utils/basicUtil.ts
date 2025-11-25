import type { Request } from "express";

export const generateAbsoluteMediaURL = (req: Request, filename: string) =>
  `${req.protocol}://${req.get("host")}/uploads/${filename}`;
