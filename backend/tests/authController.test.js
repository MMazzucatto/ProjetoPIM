var mockUsuarioCreate
var mockBcrypt

jest.mock("@prisma/client", () => {
  mockUsuarioCreate = jest.fn()
  const prismaMock = {
    usuario: {
      create: mockUsuarioCreate,
    },
  }
  return {
    PrismaClient: jest.fn(() => prismaMock),
  }
})

jest.mock("bcrypt", () => {
  mockBcrypt = {
    hash: jest.fn(),
  }
  return mockBcrypt
})

import { register } from "../controllers/authController.js"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

const makeRes = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
})

beforeEach(() => {
  jest.clearAllMocks()
})

describe("register", () => {
  it("retorna 400 quando algum campo obrigatório falta", async () => {
    const req = {
      body: { nome: "A", email: "", senha: "s", tipoPerfil: "user" },
    }
    const res = makeRes()

    await register(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: "Todos os campos são obrigatórios",
    })
  })

  it("cadastra usuário com sucesso", async () => {
    const req = {
      body: {
        nome: "Caio",
        email: "c@example.com",
        senha: "1234",
        tipoPerfil: "user",
      },
    }
    const res = makeRes()

    mockBcrypt.hash.mockResolvedValue("hashedSenha")
    const createdUser = {
      id: 1,
      nome: "Caio",
      email: "c@example.com",
      senha: "hashedSenha",
      tipoPerfil: "user",
    }
    mockUsuarioCreate.mockResolvedValue(createdUser)

    await register(req, res)

    expect(bcrypt.hash).toHaveBeenCalledWith("1234", 10)
    expect(mockUsuarioCreate).toHaveBeenCalledWith({
      data: {
        nome: "Caio",
        email: "c@example.com",
        senha: "hashedSenha",
        tipoPerfil: "user",
      },
    })
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({
      message: "Usuário cadastrado com sucesso!",
      usuario: createdUser,
    })
  })

  it("responde 500 em caso de erro interno", async () => {
    const req = {
      body: {
        nome: "Caio",
        email: "c@example.com",
        senha: "1234",
        tipoPerfil: "user",
      },
    }
    const res = makeRes()

    mockBcrypt.hash.mockResolvedValue("hashedSenha")
    mockUsuarioCreate.mockRejectedValueOnce(new Error("db error"))

    await register(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: "Erro ao cadastrar usuário" })
    )
  })
})
