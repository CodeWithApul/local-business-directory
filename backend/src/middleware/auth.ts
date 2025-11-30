import type { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.js";

import type { JwtPayload } from "jsonwebtoken";
import type { AuthenticatedRequest } from "../types/auth.js";

export const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const { userId } = verifyToken(token) as JwtPayload;
    req.user = { userId };

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
