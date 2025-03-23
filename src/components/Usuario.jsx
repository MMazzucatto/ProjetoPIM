import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";

const Usuario = () => {
  const navigate = useNavigate();

  const handleConfigClick = () => {
    navigate("/configuracoes");
  };

  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.png" alt="Logo do Via Certa ABC" />
      </header>
      <div class="container">
        <main>
          <div
            style={{
              alignItems: "center",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            <img class="FotoPerfil" src="/img/do-utilizador.png"></img>
          </div>
          <div className="login-container">
            <p type="name" placeholder="E-mail">
              <strong>Nome:</strong> Joao
            </p>
            <p type="idade" placeholder="E-mail">
              <strong>Idade:</strong> 23 anos
            </p>
            <p type="email" placeholder="E-mail">
              <strong>E-mail:</strong> joao@gmail.com
            </p>
          </div>
          <div
            className="login-container"
            style={{ marginTop: "20px", padding: "5px" }}
          >
            <h1>Minhas denúncias</h1>
          </div>

          <div className="login-container" style={{ marginTop: "20px" }}>
            <hover>Denúncias</hover>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default Usuario;
