import axios from "axios"

const API_URL = "http://localhost:3000"

export const cadastroUsuario = async (nome, email, senha) => {
  try {
    const data = {
      nome,
      email,
      senha,
    }
    const response = await axios.post(`${API_URL}/auth/register`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
