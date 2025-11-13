import axios from "axios"

const API_URL = "https://downtroddenly-undecreed-herschel.ngrok-free.dev"
// const API_URL = "http://localhost:3000"

export const cadastroUsuario = async (nome, email, senha, tipoPerfil) => {
  try {
    const data = {
      nome,
      email,
      senha,
      tipoPerfil,
    }
    const response = await axios.post(`${API_URL}/auth/register`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
