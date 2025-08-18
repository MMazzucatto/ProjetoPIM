import React from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaListagemChamados.css"

const TelaListagemChamados = () => {
  return (
    <div>
      <header>
        <img
          src="/img/LogoZelo+.png"
          alt="Logo do Via Certa ABC"
          class="logo"
        />
      </header>
      <main className="container">
        <div className="listagem-container">
          <div>
            <h1>Relatos cadastrados:</h1>
            <p>
              Essa tela deve listar em containers todos os chamados que estão
              com status diferente de "Chamado Encerrado"
            </p>
          </div>
        </div>
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}
export default TelaListagemChamados
