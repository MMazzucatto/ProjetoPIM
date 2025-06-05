import axios from "axios"

const API_URL = "http://localhost:3000"

export const cadastroRelato = async (relato, token) => {
  try {
    const response = await axios.post(`${API_URL}/users/report`, relato, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
