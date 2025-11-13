import React from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaCadastro.css"
import swal from "sweetalert2"
import { cadastroUsuario } from "./TelaCadastro.service"
import logo from "../../assets/LogoZelo+.png"

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
    document.getElementById("tipoPerfil").value = ""
  }

  const criarConta = async () => {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const tipoPerfil = document.getElementById("tipoPerfil").value

    if (!nome || !email || !senha || !tipoPerfil) {
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
      await cadastroUsuario(nome, email, senha, tipoPerfil)
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
        <img src={logo} alt="Logo do Via Certa ABC" className="logo" />
      </header>

      <div className="container">
        <main>
          <div className="cadastro-container">
            <h1>Crie sua Conta</h1>
            <form id="cadastrar">
              <input id="nome" type="text" placeholder="Nome"></input>
              <input id="email" type="email" placeholder="E-mail"></input>
              <input id="senha" type="password" placeholder="Senha"></input>
              <select id="tipoPerfil">
                <option value="" disabled selected hidden>
                  Tipo de Usuário
                </option>
                <option value="Usuario">Usuário</option>
                <option value="Manutenção">Manutenção</option>
              </select>

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
