import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { superUserMiddleware } from "../middlewares/super-user.middleware.js";

const router = Router();
// router.get("/")
// router.post("/", authMiddleware, superUserMiddleware)
// router.put("/:id", authMiddleware, superUserMiddleware)
// router.delete("/:id", authMiddleware, superUserMiddleware)

export default router;