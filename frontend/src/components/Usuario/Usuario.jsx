import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./Usuario.css"
import swal from "sweetalert2"
import setaEsquerda from "../../assets/seta-esquerda.png"
import logo from "../../assets/LogoZelo+.png"
import doUtilizador from "../../assets/do-utilizador.png"
import { getUserByUserId } from "./Usuario.service"

const Usuario = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      setLoading(true)
      const idUsuario = localStorage.getItem("idUsuario")

      if (!idUsuario) {
        throw new Error("ID do usuário não encontrado no armazenamento.")
      }

      const response = await getUserByUserId(idUsuario)

      if (Array.isArray(response) && response.length > 0) {
        setUser(response[0])
      } else if (response && !Array.isArray(response)) {
        setUser(response)
      } else {
        throw new Error("Usuário não encontrado na resposta da API.")
      }
    } catch (error) {
      setError("Não foi possível carregar o usuário.")
      console.error(error)
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Erro ao buscar dados do perfil.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleEditarFoto = () => {
    navigate("/tela-editar-foto")
  }

  if (loading) {
    return (
      <div className="loading-container">
        <p>Carregando perfil...</p>
      </div>
    )
  }

  return (
    <div>
      <header>
        <img src={logo} alt="Logo do Zelo+" className="logo" />
      </header>

      <img
        src={setaEsquerda}
        className="icones"
        onClick={handleBackClick}
        alt="Voltar"
        style={{ cursor: "pointer", margin: "10px" }}
      />

      <div className="container">
        <div className="tituloUsuario">
          <h1>Meu Perfil</h1>
        </div>

        <main>
          <div
            className="DadosUsuario"
            onClick={handleEditarFoto}
            style={{ cursor: "pointer" }}
          >
            <img
              className="FotoPerfil"
              src={user?.foto || doUtilizador}
              alt="Foto de Perfil"
            />
          </div>

          {user && (
            <div className="usuario-container">
              <div className="info-item">
                <strong>Nome:</strong>
                <span>{user.nome}</span>
              </div>

              <div className="info-item">
                <strong>Tipo de Perfil:</strong>
                <span>{user.tipoPerfil || "Não informado"}</span>
              </div>

              <div className="info-item">
                <strong>E-mail:</strong>
                <span>{user.email}</span>
              </div>

              <div className="info-item">
                <strong>Membro desde:</strong>
                <span>
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("pt-BR")
                    : "-"}
                </span>
              </div>
            </div>
          )}
        </main>
      </div>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default Usuario
