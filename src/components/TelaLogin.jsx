import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";

const TelaLogin = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/tela-cadastro");
  };

  const handleForgotPasswordClick = () => {
    navigate("/tela-esqueceu-senha");
  };

  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.png" alt="Logo do Via Certa ABC" />
      </header>
      <div class="container">
        <main>
          <div className="login-container">
            <div>
              <input type="email" placeholder="E-mail"></input>
              <input type="password" placeholder="Senha"></input>
            </div>
            <button>Entrar</button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Entrar com sua conta Google
              <img
                class="LogoGoogle"
                src="/img/LogoGoogle.png"
                alt="Logo do Google"
              />
            </div>
          </div>
          <div class="forgot-password" onClick={handleForgotPasswordClick}>
            Esqueci minha senha!
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <a>Ainda nao tem conta?</a>
            <b onClick={handleStartClick} class="forgot-password">
              Se inscreva
            </b>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default TelaLogin;
