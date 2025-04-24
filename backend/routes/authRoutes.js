import express from "express"
import {
  register,
  login,
  redefinirSenha,
} from "../controllers/authController.js"

const router = express.Router()

router.post("/login", login)
router.post("/register", register)
router.put("/redefinir-senha", redefinirSenha)

export default router
