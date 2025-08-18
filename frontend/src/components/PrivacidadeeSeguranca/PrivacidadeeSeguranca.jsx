import React from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./PrivacidadeeSeguranca.css"

const PrivacidadeeSeguranca = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    window.history.back()
  }

  const handleAlterarSenha = () => {
    navigate("/tela-redefinir-senha")
  }

  const handleLogoff = () => {
    localStorage.clear()
    navigate("/tela-login")
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
      <main className="container">
        <div className="btnVoltar">
          <img
            src="/img/seta-esquerda.png"
            className="icones"
            onClick={handleBackClick}
            alt="Voltar"
          />
          <h2 className="tituloPrivacidade">Privacidade e Segurança</h2>
        </div>

        <div className="opcoes">
          <button onClick={handleAlterarSenha}>Alterar Senha</button>
          <button>Acesso Biométrico e PIN</button>
          <button>Permissões do APP</button>
          <button onClick={handleLogoff}>Fazer logoff</button>
        </div>

        <div className="Doar">
          <h2>Doe e Ajude!</h2>
          <img src="/img/doar.png" className="icones imgDoar" alt="Doar" />
        </div>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default PrivacidadeeSeguranca
