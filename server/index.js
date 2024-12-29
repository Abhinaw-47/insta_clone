import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;
app.use("/posts", postRoutes);
app.use("/user",userRoutes);

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`)))
  .catch((error) => console.log(error.message));
