import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./PrivacidadeeSeguranca.css";

const PrivacidadeeSeguranca = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div>
      <header>
        <img src="/img/LogoZelo+.png" alt="Logo do Via Certa ABC" class="logo" />
      </header>
      <main className="container">
        <div className="btnVoltar">
          <img src="/img/seta-esquerda.png" class="icones"  onClick={handleBackClick} />
          <h2 class="tituloPrivacidade">Privacidade e Segurança</h2>
        </div>
        <div class="opcoes">
          <a>Alterar Senha</a>
          <a>Acesso Biometrico e PIN</a>
          <a>Permissões do APP</a>
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
export default PrivacidadeeSeguranca;
