import React from "react";
import MenuInferior from "../MenuInferior/MenuInferior";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Notificacoes.css";

const Notificacoes = () => {

  const handleBackClick = () => {
    window.history.back();
  };

  useEffect(() => {
    const switchToggle = document.getElementById("toggleSwitch");
    const switchLabel = document.getElementById("switchLabel");
    const botao = document.getElementById("meuBotao");

    if (switchToggle && switchLabel) {
      switchToggle.addEventListener("change", function () {
        switchLabel.innerText = this.checked ? "Ligado" : "Desligado";
      });
    } else {
      console.error("Switch não encontrado!");
    }
    
    return () => {
      if (switchToggle) {
        switchToggle.removeEventListener("change", () => {});
      }
      if (botao) {
        botao.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div>
      <header>
        <img src="/img/LogoZelo+.png" alt="Logo do Via Certa ABC" class="logo" />
      </header>
      <main className="container">
      <div className="btnVoltar">
          <img src="/img/seta-esquerda.png" class="icones"  onClick={handleBackClick} />
          <h2 class="tituloNotificacoes">Notificações</h2>
        </div>
        <div class="opcoes">
          <a>
            <img class="icones" src="/img/notificacao.png"></img>
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
          <img
            src="/img/doar.png"
            class="icones imgDoar"
            
          />
        </div>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default Notificacoes;
