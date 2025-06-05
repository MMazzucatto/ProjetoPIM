import React from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./Configuracoes.css"

const Configuracoes = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate("/tela-relato")
  }

  const handleSobreClick = () => {
    navigate("/sobre")
  }

  const handleNotificacoesClick = () => {
    navigate("/notificacoes")
  }

  const handlePrivacidadeeSegurancaClick = () => {
    navigate("/privacidade-e-seguranca")
  }
  return (
    <div>
      <header>
        <img
          src="/img/LogoZelo+.png"
          alt="Logo do Via Certa ABC"
          class="logo"
        />
      </header>
      <main className="container">
        <div className="btnVoltar">
          <img
            src="/img/seta-esquerda.png"
            class="icones"
            onClick={handleBackClick}
          />
          <h2 class="tituloConfiguracoes">Configurações</h2>
        </div>{" "}
        <div class="opcoes">
          <a>
            <img src="/img/estrela.png" class="icones" />
            Aparência
          </a>
          <a onClick={handlePrivacidadeeSegurancaClick}>
            <img src="/img/cadeado.png" class="icones" />
            Privacidade e Segurança
          </a>
          <a onClick={handleNotificacoesClick}>
            <img src="/img/notificacao.png" class="icones" />
            Notificações
          </a>
          <a>
            <img src="/img/boia-de-vida.png" class="icones" />
            Ajuda
          </a>
          <a onClick={handleSobreClick}>
            <img src="/img/informacoes.png" class="icones" />
            Sobre
          </a>
        </div>
        <div class="btnDoar">
          <h2>Doe e Ajude!</h2>
          <img src="/img/doar.png" class="icones imgDoar" />
        </div>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default Configuracoes
