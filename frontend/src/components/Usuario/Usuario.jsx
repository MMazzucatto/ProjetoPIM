import React from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./Usuario.css"
import setaEsquerda from "../../assets/seta-esquerda.png"
import logo from "../../assets/LogoZelo+.png"
import doUtilizador from "../../assets/do-utilizador.png"

const Usuario = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    window.history.back()
  }

  const handleEditarFoto = () => {
    localStorage.clear()
    navigate("/tela-editar-foto")
  }
  return (
    <div>
      <header>
        <img src={logo} alt="Logo do Via Certa ABC" class="logo" />
      </header>

      <img
        src={setaEsquerda}
        className="icones"
        onClick={handleBackClick}
        alt="Voltar"
      />
      <div class="container">
        <div class="tituloUsuario">
          <h1>Meu Perfil</h1>
        </div>
        <main>
          <div class="DadosUsuario" onClick={handleEditarFoto}>
            <img class="FotoPerfil" src={doUtilizador}></img>
          </div>
          <div className="usuario-container">
            <p type="name" placeholder="E-mail">
              <strong>Nome:</strong> Joao
            </p>
            <p type="idade" placeholder="E-mail">
              <strong>Idade:</strong> 23 anos
            </p>
            <p type="email" placeholder="E-mail">
              <strong>E-mail:</strong> joao@gmail.com
            </p>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}
export default Usuario
