import e from "express";
import { deleteFile, upload } from "../controllers/upload.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { superUserMiddleware } from "../middlewares/super-user.middleware.js";

const router = e.Router()
router.post("/", authMiddleware, superUserMiddleware, upload)
router.delete("/", authMiddleware, superUserMiddleware, deleteFile)

export default router