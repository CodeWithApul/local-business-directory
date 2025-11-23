import cookieParser from "cookie-parser";
import path from "node:path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import businessRoutes from "./routes/business";
import categoryRoutes from "./routes/category";
import locationRoutes from "./routes/location";
import userRoutes from "./routes/user";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend origin
    credentials: true, // Allow cookies to be sent and received
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const uploadDir = path.join(__dirname, "../../../");
app.use(express.static(path.join(__dirname, "../../../public")));
console.log("Resolved uploads dir:", uploadDir);
app.use("/api/business", businessRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/locations", locationRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
