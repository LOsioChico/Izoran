import { axiosInstance } from './axios'

export const AnimeAPI = {
  getTrending: async () => {
    const { data } = await axiosInstance.get('/trending')
    return data
  },
}
