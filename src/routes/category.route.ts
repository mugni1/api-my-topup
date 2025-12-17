import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { superUserMiddleware } from "../middlewares/super-user.middleware.js";
import { createCategory } from "../controllers/category.controller.js";

const router = Router();

router.post("/", authMiddleware, superUserMiddleware, createCategory)

export default router