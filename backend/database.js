import Sequelize from "sequelize"

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: console.log,
})

export async function connect() {
  try {
    await sequelize.authenticate()
    console.log("Conexão estabelecida com sucesso!")
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error)
  }
}
