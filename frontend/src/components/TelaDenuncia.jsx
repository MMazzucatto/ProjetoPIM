import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "./MenuInferior";

const TelaDenuncia = () => {
  const handleDenuncia = () => {
    const menuBtn = document.getElementById("denunciar");
    const menu = document.getElementById("ocorrencias");

    menuBtn.addEventListener("click", function () {
      menu.style.display = "block"; 
      menuBtn.style.display = "none"; 
    });

    menu.addEventListener("click", function () {
      menu.style.display = "none";
      menuBtn.style.display = "block";
    });
  };

  function selecionarItem(elemento) {
    let itens = document.querySelectorAll(".menu li");
    itens.forEach((item) => item.classList.remove("selecionado"));
    elemento.classList.add("selecionado");
  }

  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>
      <div className="container">
        <main>
          <div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <a>Selecione o local do problema</a>
            </div>
            <div className="mapa">
              <a>API MAPA</a>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                id="denunciar"
                style={{ alignItems: "center" }}
                class
                onClick={handleDenuncia}
              >
                Denunciar
              </button>
            </div>
            <ul id="ocorrencias" className="menu">
              <li onClick={() => selecionarItem(this)}>Deformacao nas vias</li>
              <li onClick={() => selecionarItem(this)}>Alagamento</li>
              <li onClick={() => selecionarItem(this)}>Falta de sinalização</li>
              <li onClick={() => selecionarItem(this)}>Falta de iluminação</li>
            </ul>
          </div>
        </main>
      </div>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};

export default TelaDenuncia;
