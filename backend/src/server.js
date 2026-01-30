import express from "express";
import mongoose from "mongoose";
import notesRoutes from "./routes/notesRoutes.js";
import { connectdb } from "../config/db.js";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/api/notes", rateLimiter, notesRoutes)
connectdb().then(() => {
app.listen(3002, () => {
    console.log("Server is running on http://localhost:3002");
  });
}).catch((error) => {
  console.error("Failed to start server:", error);
});

