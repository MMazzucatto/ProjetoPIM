import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";

const PrivacidadeeSeguranca = () => {
  const navigate = useNavigate();

  const handleConfigClick = () => {
    navigate("/configuracoes");
  };

  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>
      <main className="container">
        <h3>Privacidade e Segurança</h3>
        <div class="opcoes">
          <a>Alterar Senha</a>
          <a>Acesso Biometrico e PIN</a>
          <a>Permissões do APP</a>
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
export default PrivacidadeeSeguranca;
