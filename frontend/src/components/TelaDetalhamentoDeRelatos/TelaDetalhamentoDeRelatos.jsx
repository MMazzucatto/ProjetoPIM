import React from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaDetalhamentoDeRelatos.css"
import swal from "sweetalert2"
import IconeVoltar from "../../assets/seta-esquerda.png"
import LogoZeloPlus from "../../assets/LogoZelo+.png"
import PinLocalizacao from "../../assets/pin-de-localizacao.png"
import ImagemExemplo from "../../assets/imagem-exemplo.jpg"
import IconePerfil from "../../assets/do-utilizador.png"

const TelaDetalhamentoDeRelatos = () => {
  const handleBackClick = () => {
    window.history.back()
  }
  return (
    <div>
      <header>
        <img src={LogoZeloPlus} alt="Logo do Via Certa ABC" className="logo" />
      </header>
      <div className="btnetitulo">
        <img
          src={IconeVoltar}
          className="icones voltar"
          onClick={handleBackClick}
          alt="Voltar"
        />
        <h1 className="titulo titulo1">Detalhamento do chamado</h1>
      </div>
      <main>
        <div className="imagemRelato">
          <img src={ImagemExemplo} className="imagemChamado"></img>
        </div>

        <div>
          <div className="relato-container-ch">
            <p className="desc">
              Exemplo de relato de uma pia com vazamento de agua que nao pode
              ser solucionado no momento
            </p>
          </div>
        </div>
        <div>
          <h1 className="titulo">Localização:</h1>
          <div className="relato-container-loc">Cozinha do 1º andar</div>
        </div>

        <div>
          <h1 className="titulo">Historico de Status</h1>
          <div className="relato-container-temp">
            <img
              className="icones icone"
              src={PinLocalizacao}
              alt="Pin de localização"
            />
            <p>
              Criado em: 22/05/2025
              <br />
              Em andamento desde: 23/05/2025 <br />
            </p>
          </div>
          <div className="relato-container-tec">
            <img
              className="icones icone"
              src={IconePerfil}
              alt="Pin de localização"
            />
            <p> Técnico responsável: Caio Passarelli Faustino</p>
          </div>
        </div>
      </main>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}
export default TelaDetalhamentoDeRelatos
