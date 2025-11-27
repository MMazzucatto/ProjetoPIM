import axios from "axios"

const API_URL = "https://downtroddenly-undecreed-herschel.ngrok-free.dev"
// const API_URL = "http://localhost:3000"

export const getFinishedReports = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/getFinishedReports`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })

    return response.data.reports
  } catch (error) {
    throw error
  }
}
