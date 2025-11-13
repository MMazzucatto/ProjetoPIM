import axios from "axios"

const API_URL = "https://downtroddenly-undecreed-herschel.ngrok-free.dev"
// const API_URL = "http://localhost:3000"

export const login = async (email, senha) => {
  try {
    const data = {
      email,
      senha,
    }
    const response = await axios.post(`${API_URL}/auth/login`, data)
    return response
  } catch (error) {
    throw error
  }
}
