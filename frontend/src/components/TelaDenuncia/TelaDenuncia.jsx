import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import"./TelaDenuncia.css";
import swal from "sweetalert2";

const TelaDenuncia = () => {
  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>
      <div className="container">
        <main>
          <div className="denuncia-container">
            <h1>Faça sua denuncia</h1>
            <form id="cadastrar">
              <input id="endereco" type="text" placeholder="Rua"></input>
              <input id="numero" type="nmber" placeholder="Numero"></input>
              <input id="bairro" type="text" placeholder="Bairro"></input>
              <input id="CEP" type="text" pattern="[0-9]{5}-?[0-9]{3}" placeholder="CEP"></input>
              <textarea id="ocorrencia" type="text" placeholder="Detalhes ocorrencia"></textarea>
              <button type="button" >
                Fazer Denuncia
              </button>
            </form>
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
