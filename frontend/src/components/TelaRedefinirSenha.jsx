import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";

const TelaRedefinirSenha = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/tela-login");
  };

  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>

      <div class="container">
        <main>
          <div className="login-container">
            <h2>Redefinir Senha</h2>
            <div>
              <input type="email" placeholder="Nova Senha"></input>
              <input type="password" placeholder="Confirme sua Senha"></input>
            </div>
            <button>Confirmar</button>
          </div>
          <div class="forgot-password" onClick={handleLogin}>
            Voltar ao Login
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};

export default TelaRedefinirSenha;
