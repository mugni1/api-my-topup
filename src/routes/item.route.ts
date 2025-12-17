import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { superUserMiddleware } from "../middlewares/super-user.middleware.js";
import { createItem } from "../controllers/item.controller.js";

const router = Router();
// router.get("/")
router.post("/", authMiddleware, superUserMiddleware, createItem)
// router.put("/:id", authMiddleware, superUserMiddleware)
// router.delete("/:id", authMiddleware, superUserMiddleware)

export default router;