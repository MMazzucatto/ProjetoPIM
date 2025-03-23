import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";

const Configuracoes = () => {
  const navigate = useNavigate();

  const handleSobreClick = () => {
    navigate("/sobre");
  };

  const handleNotificacoesClick = () => {
    navigate("/notificacoes");
  };

  const handlePrivacidadeeSegurancaClick = () => {
    navigate("/privacidade-e-seguranca");
  };
  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>
      <main className="container">
        <h3>Configurações</h3>
        <div class="opcoes">
          <a>
            <img src="/img/estrela.png" class="icones" />
            Aparencia
          </a>
          <a onClick={handlePrivacidadeeSegurancaClick}>
            <img src="/img/cadeado.png" class="icones" />
            Privacidade e Segurança
          </a>
          <a onClick={handleNotificacoesClick}>
            <img src="/img/notificacao.png" class="icones" />
            Notificações
          </a>
          <a>
            <img src="/img/boia-de-vida.png" class="icones" />
            Ajuda
          </a>
          <a onClick={handleSobreClick}>
            <img src="/img/informacoes.png" class="icones" />
            Sobre
          </a>
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

export default Configuracoes;
