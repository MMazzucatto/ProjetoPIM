import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Notificacoes = () => {
  useEffect(() => {
    // Seleciona os elementos
    const switchToggle = document.getElementById("toggleSwitch");
    const switchLabel = document.getElementById("switchLabel");
    const botao = document.getElementById("meuBotao");

    // Evento para alterar o texto do switch
    if (switchToggle && switchLabel) {
      switchToggle.addEventListener("change", function () {
        switchLabel.innerText = this.checked ? "Ligado" : "Desligado";
      });
    } else {
      console.error("Switch não encontrado!");
    }

    // Evento de clique no botão
    if (botao) {
      botao.addEventListener("click", () => alert("Botão clicado!"));
    } else {
      console.error("Botão não encontrado!");
    }

    // Cleanup: remove os event listeners ao desmontar o componente
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
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>
      <main className="container">
        <div>
          <h3>Notificações</h3>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h2>Doe e Ajude!</h2>
          <img
            src="/img/doar.png"
            class="icones"
            style={{ height: "100px", width: "100px", marginTop: "20px" }}
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
