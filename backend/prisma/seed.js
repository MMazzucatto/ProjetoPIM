import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.status.createMany({
    data: [
      { descricaoStatus: "Aberto", tabela: "Relato" },
      { descricaoStatus: "Em andamento", tabela: "Relato" },
      { descricaoStatus: "Finalizado", tabela: "Relato" },
    ],
  })

  await prisma.usuario.create({
    data: {
      nome: "Admin",
      email: "admin@admin.com",
      senha: "$2b$10$TOUSUQV25U6z/9AySx7fJO6ZqxQWj/eUVEBmLAPirlbqFesRiqbK6", // a senha é: teste
      tipoPerfil: "Administrador",
    },
  })
}

main()
  .catch((error) => console.error(error))
  .finally(() => {
    console.log("Seed executada com sucesso!")
    prisma.$disconnect()
  })
