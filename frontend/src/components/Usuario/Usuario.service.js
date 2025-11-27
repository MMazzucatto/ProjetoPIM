import axios from "axios"

const API_URL = "https://downtroddenly-undecreed-herschel.ngrok-free.dev"
// const API_URL = "http://localhost:3000"

export const getUserByUserId = async (idUsuario) => {
  try {
    const response = await axios.get(
      `${API_URL}/users/getUserByUserId/${idUsuario}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    )

    return response.data.user
  } catch (error) {
    throw error
  }
}
