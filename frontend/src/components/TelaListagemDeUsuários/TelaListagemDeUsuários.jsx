import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./TelaListagemDeUsuários.css";
import swal from "sweetalert2";
import IconeVoltar from '../../assets/seta-esquerda.png';
import LogoZeloPlus from '../../assets/LogoZelo+.png';
import BtnAdicionar from '../../assets/botao-adicionar.png';
import IconeUsuario from '../../assets/do-utilizador.png';
import IconeRemover from '../../assets/remover.png';

const TelaListagemDeUsuários = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  const navigate = useNavigate();

  const handleAdicionarUsuario = () => {
    navigate("/tela-adicionar-usuarios");
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
      <div className="titulo-e-voltar">
        <img
          src={IconeVoltar}
          className="icones voltar-listar-usuarios"
          onClick={handleBackClick}
          alt="Voltar"
        />
        <h1 className="titulo titulo-listagem-usuarios">Gerenciamento de usuários</h1>
      </div>
      <main>
        <div className="adicionar-usuario-container">
          <img
            src={BtnAdicionar}
            alt="Ícone de adicionar"
            className="icone-adicionar"
            onClick={handleAdicionarUsuario}
          />
        </div>
        <h1 className="titulo">Lista de Usuários</h1>
        <div className="usuarios-lista">
          <div className="relato-container-usuarios">
            <div className="iconenometipo">
              <img
                className="icones icone"
                src={IconeUsuario}
                alt="Pin de localização"
              />
              <p>
                <h3>
                  <b>João {/*nome*/}</b>
                </h3>
                <p>Tipo e andar</p>
              </p>
            </div>
            <div className="iconeexcluir">
              <img
                className="icones icone"
                src={IconeRemover}
                alt="Pin de localização"
              />
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
export default TelaListagemDeUsuários;
