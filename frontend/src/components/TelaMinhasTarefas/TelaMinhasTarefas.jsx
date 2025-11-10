import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./TelaMinhasTarefas.css";
import swal from "sweetalert2";
import IconeVoltar from '../../assets/seta-esquerda.png';
import LogoZeloPlus from '../../assets/LogoZelo+.png';




const TelaMinhasTarefas = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div className="tela-minhas-tarefas-container">
      <header>
        <img
          src={LogoZeloPlus}
          alt="Logo do Via Certa ABC"
          className="logo"
        />
      </header>
      <div className="titulo-bnt-minhas-tarefas">
        <img
          src={IconeVoltar}
          className="icones voltarTarefas"
          onClick={handleBackClick}
          alt="Voltar"
        />
        <h1 className="titulo titulo1 titulo-minhas-tarefas">Minhas Tarefas</h1>
      </div>
      <main>
        <div className="tarefa-item">
          <div className="relato-container-tarefa">
            <div className="pendentes">
              <b className="qtd">qtd</b> <br />
              <p className="status-tarefa">Pendentes</p>
            </div>
          </div>
          <div className="relato-container-tarefa">
            <div>
              <b className="qtd">qtd</b> <br />
              <p className="status-tarefa">Em Andamento</p>
            </div>
          </div>
          <div className="relato-container-tarefa">
            <div>
              <b className="qtd">qtd</b> <br />
              <p className="status-tarefa">Concluídas Hoje</p>
            </div>
          </div>
        </div>
        <div className="listagem-tarefas">
          <div className="container tarefas">
            <div className="relato-container-status">
              <h1 className="titulo titulo1">Problema</h1>
              <p>Localização</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default TelaMinhasTarefas;
