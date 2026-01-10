import e from "express";
import { createGame, getGames } from "../controllers/game.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { superUserMiddleware } from "../middlewares/super-user.middleware.js";

const router = e.Router()
router.get("/", getGames)
router.post("/", authMiddleware, superUserMiddleware, createGame)

export default router