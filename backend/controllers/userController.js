import Relato from "../database/models/Relato.js"
import jwt from "jsonwebtoken"

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

    const novoRelato = await Relato.create({
      titulo,
      descricao,
      idUsuario,
      idResponsavel: null,
      idStatus: 1,
    })

    res.status(201).json({
      message: "Relato criado com sucesso!",
      relato: novoRelato,
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao criar relato", details: error.message })
  }
}
