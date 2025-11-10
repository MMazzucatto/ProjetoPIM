import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./TelaEditarFoto.css";
import swal from "sweetalert2";
import IconeVoltar from '../../assets/seta-esquerda.png';
import LogoZeloPlus from '../../assets/LogoZelo+.png';
import IconePerfil from '../../assets/do-utilizador.png';

const TelaEditarFoto = () => {
  const navigate = useNavigate();
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
      
      <img
        src={IconeVoltar}
        className="icones"
        onClick={handleBackClick}
        alt="Voltar"
      />
      <div className="titulo">
        <h1>Meu Perfil</h1>
      </div>

      <main>
        <img className="foto-editar" src={IconePerfil}></img>
        <input type="file" className="input-arquivo" />
        <button className="btn-salvar-foto">Alterar Foto de Perfil</button>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default TelaEditarFoto;
