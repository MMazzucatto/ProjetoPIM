import axios from "axios"

const API_URL = "https://downtroddenly-undecreed-herschel.ngrok-free.dev"
// const API_URL = "http://localhost:3000"

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/getAllUsers`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })

    console.log("response.data.usersList: ", response.data.usersList)

    return response.data.usersList
  } catch (error) {
    throw error
  }
}

export const deleteUser = async (idUsuario) => {
  return await axios.delete(`${API_URL}/users/deleteUser/${idUsuario}`)
}
