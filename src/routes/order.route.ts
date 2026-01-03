import { Router } from "express";
import { createOrder, getOrders, handleNotification } from "../controllers/order.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { superUserMiddleware } from "../middlewares/super-user.middleware.js";

const router = Router()
router.get("/", authMiddleware, superUserMiddleware, getOrders)
router.post("/", authMiddleware, createOrder)
router.post("/notification", handleNotification)

export default router