import axios from "axios"

const API_URL = "http://localhost:3000"

export const getChamados = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/getReports`)

    return response.data.reports
  } catch (error) {
    throw error
  }
}
