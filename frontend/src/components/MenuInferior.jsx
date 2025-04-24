import React from "react";
import { useNavigate } from "react-router-dom";

const MenuInferior = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/tela-login");
  };

  const handleConfigClick = () => {
    navigate("/configuracoes");
  };

  const handleDenunciaClick = () => {
    navigate("/tela-denuncia");
  };

  return (
    <div class="menu-inferior">
      <img
        class="icones"
        src="/img/botao-home.png"
        alt="Icone de Home"
        onClick={handleHomeClick}
      />
      <img
        class="icones"
        src="/img/apps.png"
        alt="Icone de Apps"
        onClick={handleDenunciaClick}
      />
      <img
        class="icones"
        src="/img/do-utilizador.png"
        alt="Icone de Aviso"
        onClick={handleLoginClick}
      />
      <img
        class="icones"
        src="/img/engrenagem.png"
        alt="Icone de Aviso"
        onClick={handleConfigClick}
      />
    </div>
  );
};
export default MenuInferior;
