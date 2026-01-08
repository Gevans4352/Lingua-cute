import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middlewares
app.use(cors()); // allow frontend calls
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
