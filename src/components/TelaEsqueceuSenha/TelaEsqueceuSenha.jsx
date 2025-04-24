import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import swal from "sweetalert2";
import "./TelaEsqueceuSenha.css";

const TelaEsqueceuSenha = () => {
  const navigate = useNavigate();

  const handleRedefinirSenha = () => {
    const email = document.getElementById("email").value;

    if (!email) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha o campo E-mail!",
      });
      return;
    }

      if (!email.includes("@") || !email.includes(".")) {
        swal.fire({
          icon: "error",
          title: "Erro",
          text: "Por favor, insira um e-mail válido.",
        });
        return;
      }

      navigate("/tela-redefinir-senha");

  };

  const handleLogin = () => {
    navigate("/tela-login");
  };

  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo Via Certa ABC" />
      </header>

      <div class="container">
        <main>
          <div className="EsqueceuSenha-container">
            <h1>Esqueceu sua Senha?</h1>
            <form>
              <div>
                <input id="email" type="email" placeholder="E-mail"></input>
              </div>
              <button type="button" onClick={handleRedefinirSenha}>
                Redefinir senha
              </button>
            </form>
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
