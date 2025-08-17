import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const register = async (req, res) => {
  const { nome, email, senha, tipoPerfil } = req.body

  try {
    if (!nome || !email || !senha || !tipoPerfil) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" })
    }

    const senhaHash = await bcrypt.hash(senha, 10)

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: senhaHash,
        tipoPerfil,
      },
    })

    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      usuario: novoUsuario,
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao cadastrar usuário", details: error.message })
  }
}

export const login = async (req, res) => {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" })
  }

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } })

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado!" })
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha)

    if (!senhaValida) {
      return res.status(401).json({ error: "Senha inválida!" })
    }

    const token = jwt.sign(
      { idUsuario: usuario.idUsuario },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    return res.status(200).json({
      message: "Login realizado com sucesso!",
      auth: true,
      token,
      idUsuario: usuario.idUsuario,
    })
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor", details: error.message })
  }
}

export const redefinirSenha = async (req, res) => {
  const { email, senha } = req.body

  if (!email) {
    return res.status(400).json({ message: "O campo email é obrigatório!" })
  }

  if (!senha) {
    return res
      .status(400)
      .json({ message: "É necessário informar uma nova senha!" })
  }

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } })
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado!" })
    }

    const senhaHash = await bcrypt.hash(senha, 10)

    await prisma.usuario.update({
      where: { email },
      data: { senha: senhaHash },
    })

    return res.status(200).json({ message: "Senha alterada com sucesso!" })
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao redefinir senha", details: error.message })
  }
}
