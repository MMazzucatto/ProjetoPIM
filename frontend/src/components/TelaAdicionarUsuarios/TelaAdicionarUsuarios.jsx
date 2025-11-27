import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaAdicionarUsuarios.css"
import swal from "sweetalert2"
import IconeVoltar from "../../assets/seta-esquerda.png"
import LogoZeloPlus from "../../assets/LogoZelo+.png"
import { cadastroUsuario } from "../TelaCadastro/TelaCadastro.service"

const TelaAdicionarUsuarios = () => {
  const [perfil, setPerfil] = useState("")

  const handleBackClick = () => {
    window.history.back()
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
    setPerfil("")
  }

  const criarConta = async () => {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const tipoPerfil = perfil

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
        <img src={LogoZeloPlus} alt="Logo do Via Certa ABC" className="logo" />
      </header>
      <img
        src={IconeVoltar}
        className="icones"
        onClick={handleBackClick}
        alt="Voltar"
      />

      <div className="container container-adicionar-usuario">
        <h1 className="titulo">Adicionar usuário</h1>

        <div className="input-perfil">
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            required
          />
        </div>

        <div style={{ marginTop: "20px" }} className="container-perfil">
          <h1 className="titulo">Perfil</h1>
          <div className="botoes-perfil">
            <button
              className={`botao-perfil ${perfil === "Usuario" ? "ativo" : ""}`}
              onClick={() => setPerfil("Usuario")}
            >
              Usuário
            </button>
            <button
              className={`botao-perfil ${
                perfil === "Manutenção" ? "ativo" : ""
              }`}
              onClick={() => setPerfil("Manutenção")}
            >
              Manutenção
            </button>
          </div>
        </div>

        <div className="btnCadastrar" align="center">
          <button className="botao-salvar" onClick={criarConta}>
            Cadastrar Usuário
          </button>
        </div>
      </div>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default TelaAdicionarUsuarios
