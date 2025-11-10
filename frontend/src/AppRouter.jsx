import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import TelaLogin from "./components/TelaLogin/TelaLogin"
import TelaCadastro from "./components/TelaCadastro/TelaCadastro"
import TelaEsqueceuSenha from "./components/TelaEsqueceuSenha/TelaEsqueceuSenha"
import TelaRedefinirSenha from "./components/TelaRedefinirSenha/TelaRedefinirSenha"
import TelaRelato from "./components/TelaRelato/TelaRelato"
import Configuracoes from "./components/Configuracoes/Configuracoes"
import Sobre from "./components/Sobre/Sobre"
import Notificacoes from "./components/Notificacoes/Notificacoes"
import PrivacidadeeSeguranca from "./components/PrivacidadeeSeguranca/PrivacidadeeSeguranca"
import Usuario from "./components/Usuario/Usuario"
import TelaListagemChamados from "./components/TelaListagemChamados/TelaListagemChamados"
import TelaHistoricoDeRelatos from "./components/TelaHistoricoDeRelatos/TelaHistoricoDeRelatos.jsx"
import TelaDetalhamentoDeRelatos  from "./components/TelaDetalhamentoDeRelatos/TelaDetalhamentoDeRelatos"
import TelaMinhasTarefas  from "./components/TelaMinhasTarefas/TelaMinhasTarefas"
import TelaListagemDeUsuários  from "./components/TelaListagemDeUsuários/TelaListagemDeUsuários"
import TelaDetalhamentoDeUsuarios  from "./components/TelaDetalhamentoDeUsuarios/TelaDetalhamentoDeUsuarios"
import TelaAdicionarUsuarios  from "./components/TelaAdicionarUsuarios/TelaAdicionarUsuarios"
import TelaEditarFoto  from "./components/TelaEditarFoto/TelaEditarFoto"






const AppRouter = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/tela-login" element={<TelaLogin />} />
      <Route path="/tela-cadastro" element={<TelaCadastro />} />
      <Route path="/tela-esqueceu-senha" element={<TelaEsqueceuSenha />} />
      <Route path="/tela-redefinir-senha" element={<TelaRedefinirSenha />} />
      <Route path="/tela-relato" element={<TelaRelato />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/notificacoes" element={<Notificacoes />} />
      <Route path="/privacidade-e-seguranca"element={<PrivacidadeeSeguranca />}/>
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/tela-listagem-chamados" element={<TelaListagemChamados />}/>
      <Route path="/tela-historico-de-relatos" element={<TelaHistoricoDeRelatos />} />
      <Route path="/tela-detalhamento-de-relatos" element={<TelaDetalhamentoDeRelatos />} />
      <Route path="/tela-minhas-tarefas" element={<TelaMinhasTarefas />} />
      <Route path="/tela-listagem-de-usuarios" element={<TelaListagemDeUsuários />} />
      <Route path="/tela-detalhamento-de-usuarios" element={<TelaDetalhamentoDeUsuarios />} />
      <Route path="/tela-adicionar-usuarios" element={<TelaAdicionarUsuarios />} />
      <Route path="/tela-editar-foto" element={<TelaEditarFoto />} />
    </Routes>
  </Router>
)

export default AppRouter
