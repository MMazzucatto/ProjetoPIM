import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaRelato.css"
import swal from "sweetalert2"
import { cadastroRelato } from "./TelaRelato.service"
import { isAuthenticated } from "../../utils/authValidation.js"
import logo from "../../assets/LogoZelo+.png"

const TelaRelato = () => {
  const navigate = useNavigate()

  const [categoria, setCategoria] = useState("")
  const [descricao, setDescricao] = useState("")
  const [imagem, setImagem] = useState(null)

  useEffect(() => {
    if (!isAuthenticated()) {
      swal.fire({
        icon: "warning",
        title: "Sessão expirada",
        text: "Por favor, faça login para continuar!",
      })
      navigate("/tela-login")
    }

    const tipoPerfil = localStorage.getItem("tipoPerfil")
    if (tipoPerfil === "Manutenção") {
      navigate("/tela-listagem-chamados")
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!categoria || !descricao) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Selecione uma categoria e preencha todos os campos!",
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
      descricao,
      idUsuario,
      imagem: imagem,
    }

    try {
      await cadastroRelato(relato, token)
      swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Relato cadastrado com sucesso!",
      })
      setCategoria("")
      setDescricao("")
      setImagem(null)
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
        <img src={logo} alt="Logo do Via Certa ABC" className="logo" />
      </header>

      <main className="container">
        <div className="relato-container">
          <h2>Novo Relato</h2>
          <form onSubmit={handleSubmit}>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="" disabled hidden>
                Selecione a categoria
              </option>
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
              placeholder="Descreva o ocorrido"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <input type="file" onChange={(e) => setImagem(e.target.files[0])} />

            <button type="submit" className="btn-enviar">
              Enviar Relato
            </button>
          </form>
        </div>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default TelaRelato
