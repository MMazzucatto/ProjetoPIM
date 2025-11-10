import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./TelaAdicionarUsuarios.css";
import swal from "sweetalert2";
import IconeVoltar from "../../assets/seta-esquerda.png";
import LogoZeloPlus from "../../assets/LogoZelo+.png";


const TelaAdicionarUsuarios = () => {
  const [perfil, setPerfil] = useState(""); // controla o botão selecionado

  const handleBackClick = () => {
    window.history.back();
  };
  const handleCadastrar = () => {
    if (!perfil) {
      swal.fire(
        "Atenção!",
        "Selecione um perfil antes de cadastrar!",
        "warning"
      );
      return;
    }
    swal.fire("Sucesso!", "Usuário adicionado!", "success");
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

      <div className="container container-adicionar-usuario">
        <h1 className="titulo">Adicionar usuário</h1>

        <div className="input-perfil">
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <input
            type="text"
            id="local"
            name="local"
            placeholder="Apartamento / Sala / Local"
            required
          />
        </div>

        <div style={{ marginTop: "20px" }} className="container-perfil">
          <h1 className="titulo">Perfil</h1>
          <div className="botoes-perfil">
            <button
              className={`botao-perfil ${perfil === "Morador" ? "ativo" : ""}`}
              onClick={() => setPerfil("Morador")}
            >
              Morador
            </button>
            <button
              className={`botao-perfil ${perfil === "Tecnico" ? "ativo" : ""}`}
              onClick={() => setPerfil("Tecnico")}
            >
              Técnico
            </button>
          </div>
        </div>

        <div className="btnCadastrar" align="center">
          <button className="botao-salvar" onClick={handleCadastrar}>
            Cadastrar Usuário
          </button>
        </div>
      </div>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};

export default TelaAdicionarUsuarios;
