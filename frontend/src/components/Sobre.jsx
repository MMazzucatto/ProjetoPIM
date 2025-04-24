import React from "react";
import { useNavigate } from "react-router-dom";
import MenuInferior from "../MenuInferior/MenuInferior";
import "./Sobre.css";

const Sobre = () => {

  return (
    <div>
      <header>
        <img src="/img/LogoViaCertaRoxo.PNG" alt="Logo do Via Certa ABC" />
      </header>
      <main>

        <div className="sobre-container">
          <div>
            <h1>Sobre nós:</h1>
            <p>
              Este aplicativo foi desenvolvido com o intuito de ajudar pessoas
              que estão passando por momentos difíceis, como depressão,
              ansiedade, entre outros. Através dele, você poderá conversar com
              pessoas que estão passando por situações semelhantes, além de ter
              acesso a conteúdos que podem te ajudar a superar esses momentos.{" "}
            </p>
            <p>
              Se você está passando por um momento difícil, não hesite em pedir
              ajuda. Você não está sozinho!
            </p>
          </div>
        </div>
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </div>
  );
};
export default Sobre;
