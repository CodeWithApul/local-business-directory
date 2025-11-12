import type { NextFunction, Request, Response } from "express";
import { prettifyError, z } from "zod/v4";

export function validateSchema(schema: z.ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parse = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    if (!parse.success) {
      return res.status(400).json({ error: prettifyError(parse.error) });
    }
    const data = parse.data as { body: any; query: any; params: any };
    req.body = data.body;
    req.query = data.query;
    req.params = data.params;
    next();
  };
}
