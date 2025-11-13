var mockCreate
var mockJwt

jest.mock("@prisma/client", () => {
  mockCreate = jest.fn()
  return {
    PrismaClient: jest.fn(() => ({
      relato: { create: mockCreate },
    })),
  }
})

jest.mock("jsonwebtoken", () => {
  mockJwt = { verify: jest.fn() }
  return mockJwt
})

import { createReport } from "../controllers/userController.js"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client"

describe("createReport", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("deve retornar erro se campos obrigatórios estiverem ausentes", async () => {
    const req = { body: {}, headers: {} }
    await createReport(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: "Todos os campos são obrigatórios",
    })
  })

  it("deve retornar erro se token não for fornecido", async () => {
    const req = {
      body: { titulo: "Teste", descricao: "Desc", idUsuario: 1 },
      headers: {},
    }
    await createReport(req, res)
    expect(res.status).toHaveBeenCalledWith(403)
    expect(res.json).toHaveBeenCalledWith({
      error: "Acesso negado: Token não fornecido!",
    })
  })

  it("deve retornar erro se token for inválido para o usuário", async () => {
    jwt.verify.mockReturnValue({ idUsuario: 999 })
    const req = {
      body: { titulo: "Teste", descricao: "Desc", idUsuario: 1 },
      headers: { authorization: "Bearer token" },
    }
    await createReport(req, res)
    expect(res.status).toHaveBeenCalledWith(403)
    expect(res.json).toHaveBeenCalledWith({
      error: "Token inválido para este usuário!",
    })
  })

  it("deve criar relato com sucesso", async () => {
    jwt.verify.mockReturnValue({ idUsuario: 1 })
    mockCreate.mockResolvedValue({ idRelato: 123 })
    const req = {
      body: { titulo: "Teste", descricao: "Desc", idUsuario: 1 },
      headers: { authorization: "Bearer token" },
      file: { path: "uploads/teste.png" },
    }
    await createReport(req, res)
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({
      message: "Relato criado com sucesso!",
      relato: { idRelato: 123 },
    })
  })
})
