import express from "express"
import { createReport, getReports } from "../controllers/userController.js"

const router = express.Router()

router.post("/report", createReport)
router.get("/getReports", getReports)

export default router
