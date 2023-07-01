import { axiosInstance } from './axios'
export const AnimeAPI = {
  getTrending: async (page = 1, perPage = 15) => {
    try {
      const { data } = await axiosInstance.get('/trending', {
        params: {
          page,
          perPage,
        },
      })
      return data
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  },

  getPopular: async (page = 1, perPage = 15) => {
    try {
      const { data } = await axiosInstance.get('/popular', {
        params: {
          page,
          perPage,
        },
      })
      return data
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  },
}
