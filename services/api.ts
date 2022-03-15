import axios from 'axios'

const api = axios.create({
  baseURL: 'http://fa5c-168-0-72-113.ngrok.io/',
})

export default api
