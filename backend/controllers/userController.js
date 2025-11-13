import { PrismaClient } from "@prisma/client"
import jwt from "jsonwebtoken"
import multer from "multer"
import path from "path"

const prisma = new PrismaClient()

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

export const createReport = async (req, res) => {
  const { titulo, descricao, idUsuario } = req.body
  const token = req.headers.authorization?.split(" ")[1]

  if (!titulo || !descricao || !idUsuario) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" })
  }

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

    // Pega o caminho da imagem, se houver
    const imagemPath = req.file ? req.file.path : null

    const novoRelato = await prisma.relato.create({
      data: {
        titulo,
        descricao,
        idUsuario: parseInt(idUsuario),
        imagem: imagemPath, // salva o caminho da imagem no banco
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
    const flatResponse = await prisma.$queryRaw`
      SELECT
        rel.*,
        s."descricaoStatus",
        res."idResposta",
        res.conteudo AS "conteudoResposta",
        res."createdAt" AS "respostaCreatedAt",
        respon."nome" AS "nomeResponsavel"
      FROM "Relato" rel
      INNER JOIN "Status" s ON s."idStatus" = rel."idStatus"
      LEFT JOIN "Responsavel" respon ON respon."idResponsavel" = rel."idResponsavel"
      LEFT JOIN "Resposta" res ON rel."idRelato" = res."idRelato"
      ORDER BY
        rel."createdAt" DESC,
        res."createdAt" ASC;
    `

    const reportsMap = new Map()

    flatResponse.forEach((row) => {
      if (!reportsMap.has(row.idRelato)) {
        reportsMap.set(row.idRelato, {
          idRelato: row.idRelato,
          titulo: row.titulo,
          descricao: row.descricao,
          idUsuario: row.idUsuario,
          idStatus: row.idStatus,
          idResponsavel: row.idResponsavel,
          dataFechamento: row.dataFechamento,
          createdAt: row.createdAt,
          updatedAt: row.updatedAt,
          descricaoStatus: row.descricaoStatus,
          nomeResponsavel: row.nomeResponsavel,
          respostas: [],
          imagem: row.imagem?.replace(/\\/g, "/"),
        })
      }

      if (row.idResposta) {
        reportsMap.get(row.idRelato).respostas.push({
          idResposta: row.idResposta,
          conteudo: row.conteudoResposta,
          createdAt: row.respostaCreatedAt,
        })
      }
    })

    const reports = Array.from(reportsMap.values())

    res.status(200).json({
      message: "Chamados recebidos com sucesso!",
      reports: reports,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "Erro ao buscar chamados",
      details: error.message,
    })
  }
}

export const getStatusToReports = async (req, res) => {
  try {
    const statusList = await prisma.status.findMany({
      where: {
        tabela: "Relato",
      },
    })

    res.status(200).json({
      statusList,
    })
  } catch (error) {
    res.status(500).json({
      error: "Erro ao buscar status",
      details: error.message,
    })
  }
}

export const createResposta = async (req, res) => {
  try {
    const { idRelato, conteudo, idStatus } = req.body

    if (!idRelato || !conteudo || !idStatus) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" })
    }

    await prisma.resposta.create({
      data: {
        idRelato,
        conteudo,
      },
    })

    await prisma.relato.update({
      where: {
        idRelato,
      },
      data: {
        idStatus: Number(idStatus),
      },
    })

    return res.status(201).json({ message: "Resposta criada com sucesso!" })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "Erro ao buscar status",
      details: error.message,
    })
  }
}

export const deleteReport = async (req, res) => {
  try {
    const { idRelato } = req.params

    await prisma.$transaction(async (tx) => {
      await tx.resposta.deleteMany({
        where: {
          idRelato: Number(idRelato),
        },
      })

      await tx.avaliacao.deleteMany({
        where: {
          idRelato: Number(idRelato),
        },
      })

      await tx.relato.delete({
        where: {
          idRelato: Number(idRelato),
        },
      })
    })

    return res.status(200).json({ message: "Chamado deletado com sucesso." })
  } catch (error) {
    console.error("Erro ao deletar chamado:", error)

    if (error.code === "P2025") {
      return res.status(404).json({ error: "Chamado não encontrado." })
    }

    return res.status(500).json({ error: "Ocorreu um erro no servidor." })
  }
}
