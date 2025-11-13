import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css"
import { isAuthenticated } from "../../utils/authValidation"
import logo from "../../assets/LogoZeloPlus.jpg"

const Home = () => {
  const navigate = useNavigate()

  const handleStartClick = () => {
    if (!isAuthenticated()) {
      navigate("/tela-login")
    } else if (localStorage.getItem("tipoPerfil") === "Manutenção") {
      navigate("/tela-listagem-chamados")
    } else {
      navigate("/tela-relato")
    }
  }

  return (
    <div className="home-container">
      <header className="header">
        <img src={logo} alt="Logo do Via Certa ABC" />
      </header>
      <div>
        <main className="textoZeloPlus">
          <div className="titulo">
            Bem Vindo a <br /> Zelo+
          </div>
          <div className="text container">
            Nossa plataforma simplifica o processo de comunicação, conectando
            você diretamente com as autoridades locais responsáveis pela
            manutenção de vias urbanas.
          </div>
          <div className="botao">
            <button onClick={handleStartClick}>Acessar</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
