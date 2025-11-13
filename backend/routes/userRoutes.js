import express from "express"
import multer from "multer"
import path from "path"
import {
  createReport,
  getReports,
  getStatusToReports,
  createResposta,
  deleteReport,
} from "../controllers/userController.js"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  },
})
const upload = multer({ storage: storage })

const router = express.Router()

router.post("/report", upload.single("imagem"), createReport)
router.get("/getReports", getReports)
router.get("/getStatusToReports", getStatusToReports)
router.post("/createResposta", createResposta)
router.delete("/deleteReport/:idRelato", deleteReport)

export default router
