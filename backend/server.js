import express from "express";
import mongoose from "mongoose";
import notesRoutes from "./routes/notesRoutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectdb();

app.use("/api/notes" , notesRoutes)

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});