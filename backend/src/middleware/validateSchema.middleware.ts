import type { NextFunction, Request, Response } from "express";
import { prettifyError, z } from "zod/v4";

export function validateSchema(schema: z.ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parse = schema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: prettifyError(parse.error) });
    }
    next();
  };
}
