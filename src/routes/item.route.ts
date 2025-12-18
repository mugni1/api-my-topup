import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { superUserMiddleware } from "../middlewares/super-user.middleware.js";
import { createItem, deleteItem, getItems, updateItem } from "../controllers/item.controller.js";

const router = Router();
router.get("/", getItems)
router.post("/", authMiddleware, superUserMiddleware, createItem)
router.put("/:id", authMiddleware, superUserMiddleware, updateItem)
router.delete("/:id", authMiddleware, superUserMiddleware, deleteItem)

export default router;