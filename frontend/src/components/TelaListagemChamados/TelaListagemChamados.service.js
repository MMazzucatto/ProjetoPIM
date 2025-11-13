import axios from "axios"

const API_URL = "https://downtroddenly-undecreed-herschel.ngrok-free.dev"
// const API_URL = "http://localhost:3000"

export const getReports = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/getReports`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })

    console.log(response.data)

    return response.data.reports
  } catch (error) {
    throw error
  }
}

export const getStatusToReports = async () => {
  const response = await axios.get(`${API_URL}/users/getStatusToReports`, {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
  })

  return response.data.statusList
}

export const saveResposta = async (idRelato, conteudo, idStatus) => {
  const data = {
    idRelato,
    conteudo,
    idStatus,
  }
  return await axios.post(`${API_URL}/users/createResposta`, data)
}

export const deleteReport = async (idRelato) => {
  return await axios.delete(`${API_URL}/users/deleteReport/${idRelato}`)
}
