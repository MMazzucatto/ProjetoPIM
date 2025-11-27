import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaListagemDeUsuários.css"
import swal from "sweetalert2"
import { getUsers, deleteUser } from "./TelaListagemUsuarios.service"
import IconeVoltar from "../../assets/seta-esquerda.png"
import LogoZeloPlus from "../../assets/LogoZelo+.png"
import BtnAdicionar from "../../assets/botao-adicionar.png"
import IconeUsuario from "../../assets/do-utilizador.png"
import IconeRemover from "../../assets/remover.png"

const TelaListagemDeUsuários = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleBackClick = () => {
    window.history.back()
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await getUsers()
      setUsers(response)
    } catch (error) {
      setError("Não foi possível carregar os usuários.")
      console.error(error)
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Erro ao buscar usuários no servidor.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAdicionarUsuario = () => {
    navigate("/tela-adicionar-usuarios")
  }

  const handleDeletarUsuario = async (idUsuario, nomeUsuario) => {
    const result = await swal.fire({
      title: "Tem certeza?",
      text: `Deseja remover o usuário ${nomeUsuario}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, remover!",
      cancelButtonText: "Cancelar",
    })

    if (result.isConfirmed) {
      try {
        await deleteUser(idUsuario)
        swal.fire("Deletado!", "O usuário foi removido com sucesso.", "success")
        fetchUsers()
      } catch (error) {
        swal.fire({
          icon: "error",
          title: "Erro",
          text: "Não foi possível deletar o usuário.",
        })
      }
    }
  }

  const renderUserList = () => {
    if (loading) return <p className="loading-text">Carregando usuários...</p>
    if (error) return <p className="error-message">{error}</p>
    if (!users || users.length === 0)
      return <p className="empty-message">Nenhum usuário cadastrado.</p>

    return users.map((user) => (
      <div className="usuario-card" key={user.idUsuario}>
        <div className="usuario-avatar-container">
          <img
            className="icone-usuario-card"
            src={IconeUsuario}
            alt="Avatar usuário"
          />
        </div>

        <div className="usuario-info">
          <h3>{user.nome}</h3>
          <p>
            <strong>Perfil:</strong> {user.tipoPerfil}
          </p>
          <p className="usuario-email">{user.email}</p>
        </div>

        <div className="usuario-actions">
          <button
            className="btn-remover-usuario"
            onClick={() => handleDeletarUsuario(user.idUsuario, user.nome)}
            title="Remover usuário"
          >
            <img className="icone-lixeira" src={IconeRemover} alt="Remover" />
          </button>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <header>
        <img src={LogoZeloPlus} alt="Logo do Zelo+" className="logo" />
      </header>

      <div className="container">
        {" "}
        <div className="titulo-e-voltar">
          <img
            src={IconeVoltar}
            className="icones voltar-listar-usuarios"
            onClick={handleBackClick}
            alt="Voltar"
          />
          <h1 className="titulo-listagem-usuarios">
            Gerenciamento de usuários
          </h1>
        </div>
        <main>
          <div className="adicionar-usuario-container">
            <img
              src={BtnAdicionar}
              alt="Adicionar novo usuário"
              className="icone-adicionar"
              onClick={handleAdicionarUsuario}
            />
          </div>

          <div className="usuarios-lista">{renderUserList()}</div>
        </main>
      </div>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default TelaListagemDeUsuários
