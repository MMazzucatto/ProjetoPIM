import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaRelato.css"
import swal from "sweetalert2"
import { cadastroRelato } from "./TelaRelato.service"
import { isAuthenticated } from "../../utils/authValidation.js"

const TelaRelato = () => {
  const navigate = useNavigate()

  const [categoria, setCategoria] = useState("")
  const [conteudo, setConteudo] = useState("")

  useEffect(() => {
    if (!isAuthenticated()) {
      swal.fire({
        icon: "warning",
        title: "Sessão expirada",
        text: "Por favor, faça login para continuar!",
      })
      navigate("/tela-login")
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!categoria || !conteudo) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Selecione uma categoria e preencha a descrição!",
      })
      return
    }

    const idUsuario = localStorage.getItem("idUsuario")
    const token = localStorage.getItem("token")

    if (!idUsuario || !token) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Erro ao identificar o usuário. Faça login novamente!",
      })
      navigate("/tela-login")
      return
    }

    const relato = {
      titulo: categoria,
      descricao: conteudo,
      idUsuario,
    }

    try {
      const response = await cadastroRelato(relato, token)
      swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Relato cadastrado com sucesso!",
      })
      setCategoria("")
      setConteudo("")
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: error.response?.data?.error || "Erro ao cadastrar relato!",
      })
    }
  }

  return (
    <div>
      <header>
        <img
          src="/img/LogoZelo+.png"
          alt="Logo do Via Certa ABC"
          className="logo"
        />
      </header>
      <div className="container">
        <main>
          <div className="relato-container">
            <h2>Novo Relato</h2>
            <form id="cadastrarRelato" onSubmit={handleSubmit}>
              <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Selecione a categoria</option>
                <option value="Manutenção">Manutenção</option>
                <option value="Limpeza">Limpeza</option>
                <option value="Iluminação">Iluminação</option>
                <option value="Hidráulica">Hidráulica</option>
                <option value="Infraestrutura">Infraestrutura</option>
                <option value="Segurança">Segurança</option>
                <option value="Pavimentação">Pavimentação</option>
                <option value="Mobiliário">Mobiliário</option>
              </select>

              <textarea
                id="conteudo"
                placeholder="Descreva o ocorrido"
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
              />

              <button id="enviarRelato" type="submit">
                Enviar Relato
              </button>
            </form>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default TelaRelato
