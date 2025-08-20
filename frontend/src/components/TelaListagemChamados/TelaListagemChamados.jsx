import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaListagemChamados.css"
import { getChamados } from "./TelaListagemChamados.service"

const TelaListagemChamados = () => {
  const [chamados, setChamados] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchChamados = async () => {
      try {
        const reports = await getChamados()
        setChamados(reports)
      } catch (error) {
        setError(
          "Não foi possível carregar os chamados. Tente novamente mais tarde."
        )
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchChamados()
  }, [])

  const renderContent = () => {
    if (loading) {
      return <p>Carregando relatos...</p>
    }

    if (error) {
      return <p className="error-message">{error}</p>
    }

    if (chamados.length === 0) {
      return <p>Nenhum chamado encontrado.</p>
    }

    return (
      <div className="lista-chamados">
        {console.log("chamados dentro da função: ", chamados)}
        {chamados.map((chamado) => (
          <div key={chamado.id} className="chamados-container">
            <h3>Tipo de Chamado: {chamado.titulo}</h3>
            <p>Descrição: {chamado.descricao}</p>
            <p>Status: {chamado.descricaoStatus}</p>
            <p>
              Criado em:{" "}
              {new Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(new Date(chamado.createdAt))}
            </p>
          </div>
        ))}
      </div>
    )
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
      <main className="container">
        <div className="listagem-container">
          <div>
            <h1>Relatos cadastrados:</h1>
            {renderContent()}
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
