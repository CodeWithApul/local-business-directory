import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import businessRoutes from "./routes/business";
import categoryRoutes from "./routes/category";
import userRoutes from "./routes/user";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/business", businessRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
