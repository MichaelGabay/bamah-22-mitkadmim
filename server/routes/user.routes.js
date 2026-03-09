import { Router } from "express"
import { getMe } from "../controllers/user.controller.js"
import { auth } from "../middleware/auth.middleware.js"

const router = Router()

router.get("/me", auth, getMe)

export default router
