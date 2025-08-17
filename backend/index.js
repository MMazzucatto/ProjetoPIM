import "dotenv/config"
import express from "express"
import { sequelize } from "./database.js"
import { PrismaClient } from "@prisma/client"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"

const app = express()
const prisma = new PrismaClient()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

app.get("/health-check", (req, res) => {
  res.json({
    message: "Funcionando!",
  })
})

prisma
  .$connect()
  .then(() => {
    console.log("✅ Conexão com o banco de dados estabelecida com sucesso!")
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar ao banco de dados:", error)
  })
