import express from "express"
import {
  createReport,
  getReports,
  getStatusToReports,
  createResposta,
  deleteReport,
} from "../controllers/userController.js"

const router = express.Router()

router.post("/report", createReport)
router.get("/getReports", getReports)
router.get("/getStatusToReports", getStatusToReports)
router.post("/createResposta", createResposta)
router.delete("/deleteReport/:idRelato", deleteReport)

export default router
