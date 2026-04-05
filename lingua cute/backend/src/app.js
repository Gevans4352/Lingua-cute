import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import badgeRoutes from "./routes/badge.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", badgeRoutes);

export default app;