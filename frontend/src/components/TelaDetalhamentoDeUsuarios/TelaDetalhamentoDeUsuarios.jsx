import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./TelaDetalhamentoDeUsuarios.css";
import swal from "sweetalert2";
import IconeVoltar from "../../assets/seta-esquerda.png";
import LogoZeloPlus from "../../assets/LogoZelo+.png";
import IconePerfil from "../../assets/do-utilizador.png";

const TelaDetalhamentoDeUsuarios = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div>
      <header>
        <img src={LogoZeloPlus} alt="Logo do Via Certa ABC" class="logo" />
      </header>
      <div>
        <div class="tituloUsuario">
          <img
            src={IconeVoltar}
            className="icones"
            onClick={handleBackClick}
            alt="Voltar"
          />
          <h1>Detalhes do Usuário</h1>
        </div>
        <main>
          <div class="DadosUsuario">
            <img class="FotoPerfil" src={IconePerfil}></img>
            <h1 className="titulo nome-usuario">Maria Santos exemplo</h1>
          </div>

          <p className="informacoes-usuario">
            <h5>
              <strong>informações</strong>
            </h5>
          </p>

          <div className="usuario-container">
            <p type="idade" placeholder="E-mail">
              <strong>Perfil:</strong> Morador/adm
            </p>
            <p type="idade" placeholder="E-mail">
              <strong>Local:</strong> 3 andar etc..
            </p>
            <p type="idade" placeholder="E-mail">
              <strong>E-mail:</strong> usuario@example.com
            </p>
          </div>

          <p className="historico-chamados">
            <h5>
              <strong>historico de chamados</strong>
            </h5>
          </p>

          <div className="usuario-container">
            <p type="idade" placeholder="E-mail">
              <strong>Chamados Abertos: </strong> 0
            </p>
            <p type="idade" placeholder="E-mail">
              <strong>Chamados Fechados: </strong>2
            </p>
          </div>

          <div className="botoes-usuario">
            <button class="botaoEditarUsuario">Editar Usuário</button>
            <button class="botaoExcluirUsuario">Excluir Usuário</button>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default TelaDetalhamentoDeUsuarios;
