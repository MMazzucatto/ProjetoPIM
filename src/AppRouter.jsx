import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TelaLogin from "./components/TelaLogin";
import TelaCadastro from "./components/TelaCadastro";
import TelaEsqueceuSenha from "./components/TelaEsqueceuSenha";
import TelaRedefinirSenha from "./components/TelaRedefinirSenha";
import TelaDenuncia from "./components/TelaDenuncia";
import Configuracoes from "./components/Configuracoes";
import Sobre from "./components/Sobre";
import Notificacoes from "./components/Notificacoes";
import PrivacidadeeSeguranca from "./components/PrivacidadeeSeguranca";
import Usuario from "./components/Usuario";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/tela-login" element={<TelaLogin />} />
      <Route path="/tela-cadastro" element={<TelaCadastro />} />
      <Route path="/tela-esqueceu-senha" element={<TelaEsqueceuSenha />} />
      <Route path="/tela-redefinir-senha" element={<TelaRedefinirSenha />} />
      <Route path="/tela-denuncia" element={<TelaDenuncia />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/notificacoes" element={<Notificacoes />} />
      <Route path="/privacidade-e-seguranca" element={<PrivacidadeeSeguranca />}/>
      <Route path="/usuario" element={<Usuario />} />
    </Routes>
  </Router>
);

export default AppRouter;
