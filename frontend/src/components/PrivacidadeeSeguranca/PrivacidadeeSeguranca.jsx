import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import mudarSenha from '../../assets/mudar-senha.png';
import acessoBiometrico from '../../assets/biometrico.png';
import meusChamadosAtivos from '../../assets/servico-de-chamada.png';
import historicoChamados from '../../assets/historia.png';
import perfilUsuario from '../../assets/do-utilizador.png';
import logoffIcone from '../../assets/sair.png';
import "./PrivacidadeeSeguranca.css";

const PrivacidadeeSeguranca = () => {
  const navigate = useNavigate();

  const handleVisualizarPerfilClick = () => {
    navigate("/Usuario");
  };
  const handleAlterarSenha = () => {
    navigate("/tela-redefinir-senha");
  };
  const handleHistoricoChamados = () => {
    navigate("/tela-historico-de-relatos");
  };

  const handleLogoff = () => {
    localStorage.clear();
    navigate("/tela-login");
  };

  const handleListagemChamados = () => {
    localStorage.clear();
    navigate("/tela-listagem-chamados");
  };
  return (
    <div>
      <header>
        <img
          src="/img/LogoZelo+.png"
          alt="Logo do Via Certa ABC"
          className="logo"
        />
      </header>
      <main className="container">
        <div className="btnVoltar">
          <h2 className="tituloPrivacidade">Privacidade e Segurança</h2>
        </div>

        <div className="opcoes">
          <a onClick={handleAlterarSenha}><img src={mudarSenha} alt="Alterar Senha" className="icones" />Alterar Senha</a>
          <a ><img src={acessoBiometrico} alt="Acesso Biométrico e PIN" className="icones" /> Acesso Biométrico e PIN</a>
          <a onClick={handleListagemChamados}><img src={meusChamadosAtivos} alt="Acesso Biométrico e PIN" className="icones" />Meus Chamados Ativos</a>
          <a onClick={handleHistoricoChamados}><img src={historicoChamados} alt="Acesso Biométrico e PIN" className="icones" />Histórico de Chamados </a>
          <a onClick={handleVisualizarPerfilClick}><img src={perfilUsuario} alt="Acesso Biométrico e PIN" className="icones" />Meu Perfil</a>
          <a onClick={handleLogoff}><img src={logoffIcone} alt="Acesso Biométrico e PIN" className="icones" />Fazer logoff</a>
        </div>

        <div className="Doar">
          <h2>Doe e Ajude!</h2>
          <img src="/img/doar.png" className="icones imgDoar" alt="Doar" />
        </div>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};

export default PrivacidadeeSeguranca;
