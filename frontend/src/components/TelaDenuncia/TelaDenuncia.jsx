import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./TelaDenuncia.css";
import swal from "sweetalert2";

const TelaDenuncia = () => {
  return (
    <div>
      <header>
        <img
          src="/img/LogoZelo+.png"
          alt="Logo do Via Certa ABC"
          class="logo"
        />
      </header>
      <div className="container">
        <main>
          <div className="denuncia-container">
            <h2>Descrição do problema</h2>
            <form id="cadastrar">
              <input id="categoria" type="text" placeholder="Categoria"></input>
              <h2 class="inserirImagem">Inserir Imagem</h2>
              <input
                type="file"
                id="imagem"
                className="imagem"
                accept="image/*"
              ></input>
            </form>
          </div>
          <div className="denuncia-container">
            <h2>Localização Interna</h2>
            <form id="cadastrar">
              <input
                id="localizacao"
                type="text"
                placeholder="Localização Interna"
              ></input>
            </form>
          </div>
          <div className="botaoEnviarDenuncia">
            <button id="enviarChamado">Enviar Chamado</button>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};

export default TelaDenuncia;
