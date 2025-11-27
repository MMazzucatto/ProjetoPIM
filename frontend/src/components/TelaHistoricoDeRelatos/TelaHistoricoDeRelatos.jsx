import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaHistoricoDeRelatos.css"
import swal from "sweetalert2"
import IconeVoltar from "../../assets/seta-esquerda.png"
import LogoZeloPlus from "../../assets/LogoZelo+.png"
import IconeFiltro from "../../assets/filtro.png"
import { getFinishedReports } from "./TelaHistoricoDeRelatos.service"

const TelaHistoricoDeRelatos = () => {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetchFinishedReports()
  }, [])

  const fetchFinishedReports = async () => {
    try {
      setLoading(true)
      const response = await getFinishedReports()
      setReports(response)
    } catch (error) {
      setError("Não foi possível carregar o histórico.")
      console.error(error)
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Erro ao buscar histórico de chamados.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const dateFormatter = (dataString) => {
    if (!dataString) return "-"
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dataString))
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className="loading-container">
          <p>Carregando histórico...</p>
        </div>
      )
    }

    if (error) {
      return (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )
    }

    if (!reports || reports.length === 0) {
      return (
        <div className="empty-container">
          <p>Nenhum chamado finalizado encontrado.</p>
        </div>
      )
    }

    return (
      <div className="listagem-historico">
        {reports.map((report) => (
          <div key={report.idRelato || report.id} className="relato-container">
            <div className="desc">
              <h1 className="titulo titulohistorico">{report.titulo}</h1>
              <p className="status-texto">
                <strong>Status:</strong> {report.descricaoStatus || "Concluído"}
              </p>
              <p>
                <strong>Descrição:</strong> {report.descricao}
              </p>
              <p className="data-texto">
                <strong>Resolvido em:</strong> {dateFormatter(report.updatedAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <header>
        <img src={LogoZeloPlus} alt="Logo do Zelo+" className="logo" />
      </header>

      <div className="container">
        <div className="btnetitulo">
          <img
            src={IconeVoltar}
            className="icones voltar"
            onClick={handleBackClick}
            alt="Voltar"
            style={{ cursor: "pointer" }}
          />
          <h1 className="titulo titulo1">Histórico de Chamados</h1>
        </div>

        <main>{renderContent()}</main>
      </div>

      <footer>
        <MenuInferior />
      </footer>
    </div>
  )
}

export default TelaHistoricoDeRelatos
