import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MenuInferior from "../MenuInferior/MenuInferior"
import "./TelaListagemChamados.css"
import {
  getReports,
  getStatusToReports,
  saveResposta,
  deleteReport,
} from "./TelaListagemChamados.service"
import Modal from "../Modal/Modal"
import { act } from "react"
import swal from "sweetalert2"

const TelaListagemChamados = () => {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedReportId, setSelectedReportId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [actualReport, setActualReport] = useState(null)
  const [statusList, setStatusList] = useState([])
  const [newResposta, setNewResposta] = useState("")
  const [newStatusId, setNewStatusId] = useState("")

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true)

        const [reportsResponse, statusResponse] = await Promise.all([
          getReports(),
          getStatusToReports(),
        ])

        console.log("valor da statusResponse", statusResponse)

        setReports(reportsResponse)
        setStatusList(statusResponse)
      } catch (error) {
        setError(
          "Não foi possível carregar os chamados. Tente novamente mais tarde."
        )
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  const handleOpenModal = (report) => {
    setActualReport(report)
    setNewStatusId(report.idStatus)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setActualReport(null)
    setNewResposta("")
    setNewStatusId("")
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    if (!newResposta.trim() || !newStatusId) {
      alert("Por favor, preencha todos os campos!")
      return
    }

    try {
      await saveResposta(actualReport.idRelato, newResposta, newStatusId)
      handleCloseModal()

      swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Resposta recebida!",
      })

      const response = await getReports()
      setReports(response)
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Algo deu errado!",
      })
    }
  }

  const handleSelecionarChamado = (id) => {
    if (selectedReportId === id) {
      setSelectedReportId(null)
    } else {
      setSelectedReportId(id)
    }
  }

  const handleDeletar = async (idRelato, e) => {
    e.stopPropagation()
    try {
      await deleteReport(idRelato)
      swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Chamado deletado!",
      })

      const response = await getReports()
      setReports(response)
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Erro",
        text: "Algo deu errado!",
      })
    }
  }

  const dateFormatter = (data) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(data))
  }

  const renderContent = () => {
    if (loading) {
      return <p>Carregando relatos...</p>
    }

    if (error) {
      return <p className="error-message">{error}</p>
    }

    if (!reports || reports.length === 0) {
      return <p>Nenhum chamado encontrado.</p>
    }

    return (
      <div className="lista-chamados">
        {reports.map((report) => (
          <div
            key={report.idRelato}
            className="chamados-container"
            onClick={() => handleSelecionarChamado(report.idRelato)}
          >
            <h5>Tipo de Chamado: {report.titulo}</h5>
            <p>Descrição: {report.descricao}</p>
            <p>Status: {report.descricaoStatus}</p>
            <p>Responsável: {!!report.responsavel ? report.responsavel : ""}</p>
            <p>Criado em: {dateFormatter(report.createdAt)}</p>

            {selectedReportId === report.idRelato && (
              <div className="conteudo-expandido">
                <div className="historico-chamado">
                  <h4>Histórico de Atualizações:</h4>

                  {report.respostas && report.respostas.length > 0 ? (
                    report.respostas.map((resposta) => (
                      <div key={resposta.idResposta} className="resposta-item">
                        <p className="resposta-data">
                          Atualizado em: {dateFormatter(resposta.createdAt)}
                        </p>
                        <p className="resposta-conteudo">{resposta.conteudo}</p>
                      </div>
                    ))
                  ) : (
                    <p className="sem-respostas">
                      Nenhuma atualização da equipe de manutenção.
                    </p>
                  )}
                </div>

                <div className="opcoes-chamado">
                  <button
                    className="botao-editar"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleOpenModal(report)
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="botao-deletar"
                    onClick={(e) => handleDeletar(report.idRelato, e)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <header>
        <img src="/img/LogoZelo+.png" alt="Logo do Zelo+" className="logo" />
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {actualReport && (
          <form onSubmit={handleSubmitForm} className="modal-form">
            <h2>Atualizar Chamado #{actualReport.idRelato}</h2>
            <p>
              <strong>Título:</strong> {actualReport.titulo}
            </p>

            <label htmlFor="nova-resposta">Adicionar nova resposta:</label>
            <textarea
              id="nova-resposta"
              rows="5"
              value={newResposta}
              onChange={(e) => setNewResposta(e.target.value)}
              placeholder="Digite aqui a atualização ou a solução para o chamado..."
            ></textarea>

            <label htmlFor="status-select">Alterar status para:</label>
            <select
              id="status-select"
              value={newStatusId}
              onChange={(e) => setNewStatusId(e.target.value)}
            >
              {statusList.map((status) => (
                <option key={status.idStatus} value={status.idStatus}>
                  {status.descricaoStatus}
                </option>
              ))}
            </select>

            <div className="modal-actions">
              <button
                type="button"
                className="botao-cancelar"
                onClick={handleCloseModal}
              >
                Cancelar
              </button>
              <button type="submit" className="botao-salvar">
                Salvar Atualização
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  )
}

export default TelaListagemChamados
