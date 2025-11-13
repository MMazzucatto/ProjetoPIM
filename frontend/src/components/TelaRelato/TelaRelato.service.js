import axios from "axios"

const API_URL = "https://downtroddenly-undecreed-herschel.ngrok-free.dev"
// const API_URL = "http://localhost:3000"

export const cadastroRelato = async (relato, token) => {
  try {
    const formData = new FormData()
    formData.append("titulo", relato.titulo)
    formData.append("descricao", relato.descricao)
    formData.append("idUsuario", relato.idUsuario)
    if (relato.imagem) {
      formData.append("imagem", relato.imagem)
    }

    const response = await axios.post(`${API_URL}/users/report`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}
