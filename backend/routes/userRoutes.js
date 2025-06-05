import express from "express"
import { createReport } from "../controllers/userController.js"

const router = express.Router()

router.post("/report", createReport)

export default router
