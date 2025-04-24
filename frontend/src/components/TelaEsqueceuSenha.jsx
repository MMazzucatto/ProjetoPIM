import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";

const TelaEsqueceuSenha = () => {
  const navigate = useNavigate();
  const handleRedefinirSenha = () => {
    navigate("/tela-redefinir-senha");
  };

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
            <h2>Esqueceu sua Senha?</h2>
            <div>
              <input type="email" placeholder="E-mail"></input>
            </div>
            <button onClick={handleRedefinirSenha}>Redefinir senha</button>
            <p>
              Voce receberá por e-mail <br /> um link para cadastrar <br /> sua
              nova senha
            </p>
          </div>
        </main>
      </div>
      <div class="forgot-password" onClick={handleLogin}>
        Voltar ao Login
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};

export default TelaEsqueceuSenha;
