import { PrismaClient } from "@prisma/client"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export const createReport = async (req, res) => {
  const { titulo, descricao, idUsuario } = req.body

  if (!titulo || !descricao || !idUsuario) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res
      .status(403)
      .json({ error: "Acesso negado: Token não fornecido!" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (decoded.idUsuario !== parseInt(idUsuario)) {
      return res
        .status(403)
        .json({ error: "Token inválido para este usuário!" })
    }

    const novoRelato = await prisma.relato.create({
      data: {
        titulo,
        descricao,
        idUsuario: parseInt(idUsuario),
        idResponsavel: null,
        idStatus: 1,
      },
    })

    res.status(201).json({
      message: "Relato criado com sucesso!",
      relato: novoRelato,
    })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: "Erro ao criar relato", details: error.message })
  }
}

export const getReports = async (req, res) => {
  try {
    const response = await prisma.$queryRaw`
      select r.*, s."descricaoStatus" from "Relato" r
      inner join "Status" s
      on s."idStatus" = r."idStatus"
    `

    res.status(200).json({
      message: "Chamados recebidos com sucesso!",
      reports: response,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "Erro ao buscar chamados",
      details: error.message,
    })
  }
}
