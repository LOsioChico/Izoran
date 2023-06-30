import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ANIMEAPI_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
