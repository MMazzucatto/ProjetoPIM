import React from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./Sobre.css"
import logo from "../../assets/LogoZelo+.png"

const Sobre = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo do Via Certa ABC" class="logo" />
      </header>
      <main className="sobre">
        <div className="sobre-container">
          <div>
            <h1>Sobre nós:</h1>
            <p>
              O Zelo+ foi criado com um propósito claro: transformar a maneira
              como você cuida do seu espaço.
            </p>
            <p>
              Acreditamos que a comunicação sobre manutenção não precisa ser
              complicada, baseada em e-mails perdidos ou mensagens de WhatsApp.
              Nossa plataforma centraliza os chamados, garantindo transparência
              total do início ao fim.
            </p>
            <p>
              Conectamos usuários, gestores e equipes de manutenção para que,
              juntos, possam zelar pelos ambientes de forma eficiente e
              colaborativa.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}
export default Sobre
