import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import './TelaLogin.css';
import swal from "sweetalert2";

const TelaLogin = () => {



  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/tela-cadastro");
  };

  const handleForgotPasswordClick = () => {
    navigate("/tela-esqueceu-senha");
  };

  function Login()  {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  

    if (!email || !senha) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha todos os campos!",
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

  };

  return (
    <div>
      <header>
        <img src="/img/LogoZelo+.png" alt="Logo do Via Certa ABC" class="logo" />
      </header>
      <div class="container">
        <main>
          <div className="login-container">
            <h1>Fazer Login</h1>
            <form id="login-form" onSubmit={(e) => e.preventDefault()}>
                <input id="email" type="email" placeholder="E-mail"></input>
                <input id="senha" type="password" placeholder="Senha"></input>
              <button type="button" onClick={Login}>Entrar</button>
            </form>
            <div class="google">
              Entrar com sua conta Google
              <img
                class="LogoGoogle"
                src="/img/LogoGoogle.png"
                alt="Logo do Google"
              />
            </div>
          </div>
          <div class="forgot-password" onClick={handleForgotPasswordClick}>
            Esqueci minha senha!
          </div>
          <div class="direcionar-cadastro">
            <a>Ainda nao tem conta?</a>
            <b onClick={handleStartClick} class="forgot-password">
              Se inscreva
            </b>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default TelaLogin;
