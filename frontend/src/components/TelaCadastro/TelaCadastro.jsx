import React from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaCadastro.css"
import swal from "sweetalert2"
import { cadastroUsuario } from "./TelaCadastro.service"

const TelaCadastro = () => {
  const navigate = useNavigate()
  const handleStartClick = () => {
    navigate("/tela-login")
  }

  const handleSuccess = () => {
    swal.fire({
      icon: "success",
      title: "Sucesso",
      text: "Conta criada com sucesso!",
    })
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("senha").value = ""
  }

  const criarConta = async () => {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    if (!nome || !email || !senha) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha todos os campos!",
      })
      return
    }
    if (!email.includes("@") || !email.includes(".")) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Por favor, insira um e-mail válido.",
      })
      return
    }

    try {
      await cadastroUsuario(nome, email, senha)
      handleSuccess()
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Erro no cadastro",
        text: error.message || "Ocorreu um erro ao criar a conta.",
      })
    }
  }

  return (
    <div>
      <header>
        <img
          src="/img/LogoZelo+.png"
          alt="Logo do Via Certa ABC"
          className="logo"
        />
      </header>

      <div className="container">
        <main>
          <div className="cadastro-container">
            <h1>Crie sua Conta</h1>
            <form id="cadastrar">
              <input id="nome" type="text" placeholder="Nome"></input>
              <input id="email" type="email" placeholder="E-mail"></input>
              <input id="senha" type="password" placeholder="Senha"></input>
              <button type="button" onClick={criarConta}>
                Criar Conta
              </button>
            </form>
          </div>
          <div className="DirecionarLogin">
            <a> Ja possui uma conta! </a>
            <u onClick={handleStartClick}>Entrar</u>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}
export default TelaCadastro
