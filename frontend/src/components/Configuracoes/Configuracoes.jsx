import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./Configuracoes.css"
import logo from "../../assets/LogoZelo+.png"
import utilizador from "../../assets/do-utilizador.png"
import cadeado from "../../assets/cadeado.png"
import notificacao from "../../assets/notificacao.png"
import boiaImg from "../../assets/boia-de-vida.png"
import info from "../../assets/informacoes.png"
import donate from "../../assets/doar.png"

const Configuracoes = () => {
  const [perfilUsuario, setPerfilUsuario] = useState("")

  useEffect(() => {
    const tipoPerfil = localStorage.getItem("tipoPerfil")
    if (tipoPerfil) {
      setPerfilUsuario(tipoPerfil)
    }
  }, [])

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

  const handleAdicionarUsuario = () => {
    navigate("/tela-adicionar-usuarios")
  }

  const handleListagemDeUsuario = () => {
    navigate("/tela-listagem-de-usuarios")
  }

  const isAdmin = perfilUsuario === "Administrador"

  return (
    <div>
      <header>
        <img src={logo} alt="Logo do Via Certa ABC" class="logo" />
      </header>
      <main className="container">
        <div className="btnVoltar">
          <h2 class="tituloConfiguracoes">Configurações</h2>
        </div>{" "}
        <div class="opcoes">
          {isAdmin && (
            <>
              <a onClick={handleAdicionarUsuario}>
                <img
                  src={utilizador}
                  className="icones"
                  alt="Adicionar usuários"
                />
                Adicionar usuários
              </a>
              <a onClick={handleListagemDeUsuario}>
                <img
                  src={utilizador}
                  className="icones"
                  alt="tela-listagem-de-usuarios"
                />
                Listagem de usuários
              </a>
            </>
          )}
          <a onClick={handlePrivacidadeeSegurancaClick}>
            <img src={cadeado} class="icones" />
            Privacidade e segurança
          </a>
          <a onClick={handleNotificacoesClick}>
            <img src={notificacao} class="icones" />
            Notificações
          </a>
          <a>
            <img src={boiaImg} class="icones" />
            Ajuda
          </a>
          <a onClick={handleSobreClick}>
            <img src={info} class="icones" />
            Sobre
          </a>
        </div>
        <div class="btnDoar">
          <h2>Doe e Ajude!</h2>
          <img src={donate} class="icones imgDoar" />
        </div>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default Configuracoes
