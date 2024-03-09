import axios from "axios"

const api = axios.create({
  baseURL: "https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json",
})

export default api
