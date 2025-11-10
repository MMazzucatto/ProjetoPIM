import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./TelaHistoricoDeRelatos.css";
import swal from "sweetalert2";
import IconeVoltar from '../../assets/seta-esquerda.png';
import LogoZeloPlus from '../../assets/LogoZelo+.png';
import IconeFiltro from '../../assets/filtro.png';


const TelaHistoricoDeRelatos = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div>
      <header>
        <img
          src={LogoZeloPlus}
          alt="Logo do Via Certa ABC"
          className="logo"
        />
      </header>
      <div className="btnetitulo">
        <img
          src={IconeVoltar}
          className="icones voltar"
          onClick={handleBackClick}
          alt="Voltar"
        />
        <h1 className="titulo titulo1">Histórico de Chamados</h1>
      </div>
      <main>
        <div className="categoriaefiltro">
          <p>Categoria</p>
          <img src={IconeFiltro} alt="Filtro" className="icones"></img>
        </div>
        {/* Fazer um for nesse trecho */}
        <div className="listagem-historico">
          <div className="relato-container">
            <p className="desc">
              <h1 className="titulo titulohistorico">Titulo chamado</h1> <br />
              <p>Resolvido em {/*data*/}</p>
            </p>
          </div>
        </div>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default TelaHistoricoDeRelatos;
