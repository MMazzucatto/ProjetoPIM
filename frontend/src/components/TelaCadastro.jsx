import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";

const TelaCadastro = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/tela-login");
  };
  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>

      <div class="container">
        <main>
          <div className="login-container">
            <h2>Crie sua Conta</h2>
            <div>
              <input type="text" placeholder="Nome"></input>
              <input type="email" placeholder="Telefone"></input>
              <input type="email" placeholder="E-mail"></input>
              <input type="number" placeholder="CEP"></input>
              <input type="password" placeholder="Senha"></input>
            </div>
            <button>Criar Conta</button>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a> Ja possui uma conta! </a>
            <u style={{ fontWeight: "bold" }} onClick={handleStartClick}>
              Entrar
            </u>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default TelaCadastro;
