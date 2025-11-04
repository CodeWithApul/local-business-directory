import express from "express";
import businessRoutes from "./routes/business";
// import categoryRoutes from "./routes/category";
// import userRoutes from './routes/user';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/businesses", businessRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
