import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import swal from "sweetalert2";
import "./TelaRedefinirSenha.css";

const TelaRedefinirSenha = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/tela-login");
  };

  function ConfirmarSenha() {

    var novaSenha = document.getElementById("nova-senha").value;
    var confirmarSenha = document.getElementById("confirmar-senha").value;

    if (!novaSenha  || !confirmarSenha) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha todos os campos!",
      });
      return;
    }

    if(novaSenha !== confirmarSenha) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "As senhas não coincidem!",
      });
      return;
    }

  }


  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>

      <div class="container">
        <main>
          <div className="RedefinirSenha-container">
            <h1>Redefinir Senha</h1>
            <form>
                <input id="nova-senha" type="password" placeholder="Nova Senha"></input>
                <input id="confirmar-senha" type="password" placeholder="Confirme sua Senha"></input>
              <button type="button" onClick={ConfirmarSenha}>Confirmar</button>
            </form>
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
