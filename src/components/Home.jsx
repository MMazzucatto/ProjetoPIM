import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/tela-denuncia");
  };

  return (
    <div style={{ backgroundColor: "#F2F2F2" }}>
      <header>
        <img src="/img/LogoViaCerta.PNG" alt="Logo do Via Certa ABC" />
      </header>
      <div>
        <main>
          <div className="titulo">
            Bem Vindo ao <br /> VIA CERTA ABC
          </div>
          <div className="subtitulo">
            Aqui você tem o poder de fazer a diferença
          </div>
          <div className="text">
            Nossa plataforma simplifica o processo de comunicação, conectando
            você diretamente com as autoridades locais responsáveis pela
            manutenção de vias urbanas.
          </div>
          <div className="botao">
            <button onClick={handleStartClick}>Iniciar</button>
          </div>
          <div style={{ textAlign: "center" }}>
            Reporte, participe e transforme <br /> sua comunidade!
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
