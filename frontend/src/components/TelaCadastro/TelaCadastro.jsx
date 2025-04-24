import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./TelaCadastro.css";
import swal from "sweetalert2";

const TelaCadastro = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/tela-login");
  };

const CriarConta = () => {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const cep = document.getElementById("CEP").value;
  const senha = document.getElementById("senha").value;

  if (!nome || !telefone || !email || !cep || !senha) {
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
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>

      <div class="container">
        <main>
          <div className="cadastro-container">
            <h1>Crie sua Conta</h1>
            <form id="cadastrar">
              <input id="nome" type="text" placeholder="Nome"></input>
              <input id="telefone" type="tel" placeholder="Telefone"></input>
              <input id="email" type="email" placeholder="E-mail"></input>
              <input id="CEP" type="text" pattern="[0-9]{5}-?[0-9]{3}" placeholder="CEP"></input>
              <input id="senha" type="password" placeholder="Senha"></input>
              <button type="button" onClick={CriarConta}>Criar Conta</button>
            </form>

          </div>
          <div class="DirecionarLogin">
            <a> Ja possui uma conta! </a>
            <u onClick={handleStartClick}>
              Entrar
            </u>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default TelaCadastro;
