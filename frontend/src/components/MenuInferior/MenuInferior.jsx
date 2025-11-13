import React from "react"
import { useNavigate } from "react-router-dom"
import botaoHome from "../../assets/botao-home.png"
import appsImg from "../../assets/apps.png"
import iconeAviso from "../../assets/do-utilizador.png"
import engrenagem from "../../assets/engrenagem.png"
import "./MenuInferior.css"

const MenuInferior = () => {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate("/")
  }

  const handleLoginClick = () => {
    navigate("/tela-login")
  }

  const handleConfigClick = () => {
    navigate("/configuracoes")
  }

  const handleDenunciaClick = () => {
    navigate("/tela-relato")
  }

  return (
    <div class="menu-inferior">
      <img
        class="icones"
        src={botaoHome}
        alt="Icone de Home"
        onClick={handleHomeClick}
      />
      <img
        class="icones"
        src={appsImg}
        alt="Icone de Apps"
        onClick={handleDenunciaClick}
      />
      <img
        class="icones"
        src={iconeAviso}
        alt="Icone de Aviso"
        onClick={handleLoginClick}
      />
      <img
        class="icones"
        src={engrenagem}
        alt="Icone de Aviso"
        onClick={handleConfigClick}
      />
    </div>
  )
}
export default MenuInferior
