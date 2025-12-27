import { Router } from "express";
import { createOrder, handleNotification } from "../controllers/order.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router()
router.post("/", authMiddleware, createOrder)
router.post("/notification", handleNotification)

export default router