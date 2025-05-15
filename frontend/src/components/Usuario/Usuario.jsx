import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./Usuario.css";

const Usuario = () => {
  const navigate = useNavigate();

  const handleConfigClick = () => {
    navigate("/configuracoes");
  };

  return (
    <div>
      <header>
        <img
          src="/img/LogoZelo+.png"
          alt="Logo do Via Certa ABC"
          class="logo"
        />
      </header>
      <div class="container">
        <main>
          <div class="DadosUsuario">
            <img class="FotoPerfil" src="/img/do-utilizador.png"></img>
          </div>
          <div className="usuario-container">
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
          <div className="usuario-container MinhasDenuncias">
            <h1>Minhas denúncias</h1>
          </div>
          <div className="DenunciasFeitas" >
            <div className="usuario-container Denuncias">
              <h1 class="status">Pendente</h1>
              <h5>Lampada Queimada</h5>
              <p class="local">Banheiro masculino</p>
            </div>
            <div className="usuario-container Denuncias">
              <h1 class="status">Pendente</h1>
              <h5>Lampada Queimada</h5>
              <p class="local">Banheiro masculino</p>
            </div>
            <div className="usuario-container Denuncias">
              <h1 class="status">Pendente</h1>
              <h5>Lampada Queimada</h5>
              <p class="local">Banheiro masculino</p>
            </div>
            <div className="usuario-container Denuncias">
              <h1 class="status">Pendente</h1>
              <h5>Lampada Queimada</h5>
              <p class="local">Banheiro masculino</p>
            </div>
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
