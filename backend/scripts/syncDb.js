import "dotenv/config"
import { sequelize } from "../database.js"
import db from "../database/models/index.js"

async function syncDatabase() {
  try {
    console.log("Sincronizando banco de dados...")
    await sequelize.sync({ force: true })
    console.log("Banco de dados sincronizado com sucesso!")
  } catch (error) {
    console.error("Erro ao sincronizar o banco de dados:", error)
  } finally {
    await sequelize.close()
  }
}

syncDatabase()
