import { Router } from "express";
import { getUserBadges } from "../controllers/badge.controller.js";

const router = Router();

router.get("/users/:userId/badges", getUserBadges);

export default router;