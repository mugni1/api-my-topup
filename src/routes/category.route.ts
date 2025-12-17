import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { superUserMiddleware } from "../middlewares/super-user.middleware.js";
import { createCategory, updateCategory, deleteCategory } from "../controllers/category.controller.js";

const router = Router();

router.post("/", authMiddleware, superUserMiddleware, createCategory)
router.put("/:id", authMiddleware, superUserMiddleware, updateCategory)
router.delete("/:id", authMiddleware, superUserMiddleware, deleteCategory)

export default router