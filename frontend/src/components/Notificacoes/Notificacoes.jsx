import React from "react"
import MenuInferior from "../MenuInferior/MenuInferior"
import { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./Notificacoes.css"
import logo from "../../assets/LogoZelo+.png"
import setaEsquerda from "../../assets/seta-esquerda.png"
import notificacoes from "../../assets/notificacao.png"
import donate from "../../assets/doar.png"

const Notificacoes = () => {
  const handleBackClick = () => {
    window.history.back()
  }

  useEffect(() => {
    const switchToggle = document.getElementById("toggleSwitch")
    const switchLabel = document.getElementById("switchLabel")
    const botao = document.getElementById("meuBotao")

    if (switchToggle && switchLabel) {
      switchToggle.addEventListener("change", function () {
        switchLabel.innerText = this.checked ? "Ligado" : "Desligado"
      })
    } else {
      console.error("Switch não encontrado!")
    }

    return () => {
      if (switchToggle) {
        switchToggle.removeEventListener("change", () => {})
      }
      if (botao) {
        botao.removeEventListener("click", () => {})
      }
    }
  }, [])

  return (
    <div>
      <header>
        <img src={logo} alt="Logo do Via Certa ABC" class="logo" />
      </header>
      <main className="container">
        <div className="btnVoltar">
          <img src={setaEsquerda} class="icones" onClick={handleBackClick} />
          <h2 class="tituloNotificacoes">Notificações</h2>
        </div>
        <div class="opcoes">
          <a>
            <img class="icones" src={notificacoes}></img>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="toggleSwitch"
              />
              <label
                className="form-check-label"
                htmlFor="toggleSwitch"
                id="switchLabel"
              >
                Desligado
              </label>
            </div>
          </a>
          <a>Notificações por e-mail</a>
          <a>Notificações por SMS</a>
          <a>Notificações Personalizadas</a>
        </div>
        <div class="Doar">
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
export default Notificacoes
