import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";

import businessRoutes from "./routes/business.js";
import categoryRoutes from "./routes/category.js";
import locationRoutes from "./routes/location.js";
import userRoutes from "./routes/user.js";
import visitorRoutes from "./routes/visitor.js";
import { paths } from "./utils/paths.js";

import type { Request, Response, NextFunction } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Frontend origin
    credentials: true, // Allow cookies to be sent and received
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(paths.uploads));

app.use("/api/business", businessRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/visitor", visitorRoutes);

// Multer + general error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof multer.MulterError) {
    // Multer-specific errors (e.g. file too large)
    return res.status(400).json({ error: err.message });
  }

  if (err) {
    // Custom fileFilter errors or other errors
    return res.status(400).json({ error: err.message });
  }

  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
